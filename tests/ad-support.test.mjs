import test from "node:test";
import assert from "node:assert/strict";
import {SUPPORTED_LANGUAGES} from "../src/language-routing.js";
import {AD_SUPPORT_COPY, adSupportCopyFor} from "../src/ad-support-locales.js";
import {detectsAdBlocking} from "../src/ad-support-detection.js";

test("every selectable language has complete support notice and banner copy", () => {
    assert.deepEqual(Object.keys(AD_SUPPORT_COPY).sort(), [...SUPPORTED_LANGUAGES].sort());
    for (const language of SUPPORTED_LANGUAGES) {
        const copy = adSupportCopyFor(language);
        for (const key of ["ad", "advertise", "title", "body", "dismiss", "close"]) {
            assert.ok(typeof copy[key] === "string" && copy[key].trim().length >= (["title", "body"].includes(key) ? 8 : 1), language + ": " + key);
        }
    }
});

function item({display = "block", visibility = "visible", width = 12, height = 12, connected = true, parent = null} = {}) {
    return {nodeType: 1, isConnected: connected, parentElement: parent,
        style: {display, visibility, opacity: "1"},
        getBoundingClientRect() { return {width, height}; }};
}
const styleOf = el => el.style;

test("visible bait and ad iframe do not trigger a reminder", () => {
    assert.equal(detectsAdBlocking({bait: item(), frame: item(), styleOf}), false);
});
test("cosmetically hidden bait triggers a reminder", () => {
    assert.equal(detectsAdBlocking({bait: item({display: "none"}), frame: item(), styleOf}), true);
});
test("removed or collapsed bait triggers a reminder", () => {
    assert.equal(detectsAdBlocking({bait: item({connected: false}), frame: item(), styleOf}), true);
    assert.equal(detectsAdBlocking({bait: item({height: 0}), frame: item(), styleOf}), true);
});
test("hidden ad iframe triggers, but unavailable iframe alone does not", () => {
    const parent = item({display: "none"});
    assert.equal(detectsAdBlocking({bait: item(), frame: item({parent}), styleOf}), true);
    assert.equal(detectsAdBlocking({bait: item(), frame: null, styleOf}), false);
});
test("off-screen content-visibility must not be mistaken for ad blocking", () => {
    assert.equal(detectsAdBlocking({bait: item(), frame: item({height: 0}), styleOf}), false);
});


import {AD_NETWORK_PROBE_URL, detectsNetworkAdBlocking} from "../src/ad-support-detection.js";

test("ad-network probe only checks a non-ad asset, never an ad impression", async () => {
    let checked;
    const blocked = await detectsNetworkAdBlocking((url) => {
        checked = url;
        return Promise.resolve({type: "opaque"});
    }, true);
    assert.equal(blocked, false);
    assert.equal(checked, AD_NETWORK_PROBE_URL);
    assert.match(checked, /favicon\\.ico$/);
});

test("network-blocked AADS with a working site triggers a notice", async () => {
    const calls = [];
    const blocked = await detectsNetworkAdBlocking((url) => {
        calls.push(url);
        return url === AD_NETWORK_PROBE_URL
            ? Promise.reject(new TypeError("ERR_BLOCKED_BY_CLIENT"))
            : Promise.resolve({ok: true});
    }, true);
    assert.equal(blocked, true);
    assert.deepEqual(calls, [AD_NETWORK_PROBE_URL, "/favicon.svg"]);
});

test("offline or failed site connectivity never triggers a false adblock notice", async () => {
    let count = 0;
    const offline = await detectsNetworkAdBlocking(() => { count++; return Promise.reject(); }, false);
    assert.equal(offline, false);
    assert.equal(count, 0);
    const unreachable = await detectsNetworkAdBlocking(() => Promise.reject(new Error("network down")), true);
    assert.equal(unreachable, false);
});

test("aborted probing does not report a blocker", async () => {
    const controller = new AbortController();
    controller.abort();
    const value = await detectsNetworkAdBlocking(() => Promise.reject(), true, controller.signal);
    assert.equal(value, false);
});
