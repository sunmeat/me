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
            assert.ok(typeof copy[key] === "string" && copy[key].length > 4, language + ": " + key);
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
