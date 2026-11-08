// Combine cosmetic filtering with a low-impact connectivity probe.
// Never request an ad creative as a test: /favicon.ico does not generate
// fake advertiser impressions.
function hiddenByCss(element, styleOf) {
    for (let node = element; node && node.nodeType === 1; node = node.parentElement) {
        const style = styleOf(node);
        if (!style) continue;
        if (style.display === "none" || style.visibility === "hidden" ||
            style.visibility === "collapse" || Number(style.opacity) === 0) return true;
    }
    return false;
}

export function detectsAdBlocking({bait, frame, styleOf}) {
    if (!bait) return false;
    if (bait.isConnected === false) return true;
    if (hiddenByCss(bait, styleOf)) return true;
    const rect = bait.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return true;
    // A frame below the fold may have zero measured height from content-visibility.
    if (frame && (frame.isConnected === false || hiddenByCss(frame, styleOf))) return true;
    return false;
}

export const AD_NETWORK_PROBE_URL = "https://acceptable.a-ads.com/favicon.ico";

/**
 * An ad blocker can reject network requests while leaving the iframe visible
 * in the DOM. Test the AADS hostname without requesting an ad impression.
 * If that fails, require a successful same-origin request before warning
 * the visitor, and never report a cancellation/offline page as a blocker.
 * This signal is indicative, not proof (AADS could be temporarily down).
 */
export async function detectsNetworkAdBlocking(fetcher, online = true, signal) {
    if (!online || signal?.aborted) return false;
    try {
        await fetcher(AD_NETWORK_PROBE_URL, {
            mode: "no-cors", credentials: "omit", cache: "no-store", signal,
        });
        return false;
    } catch {
        if (signal?.aborted) return false;
        try {
            const control = await fetcher("/favicon.svg", {
                mode: "same-origin", credentials: "omit", cache: "no-store", signal,
            });
            return !signal?.aborted && control?.ok === true;
        } catch {
            return false;
        }
    }
}
