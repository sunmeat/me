// Cosmetic-filter detection only: no extra network request or ad-view events.
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
    // Do not measure the iframe rectangle: content-visibility:auto can skip
    // off-screen sections even without an ad blocker (notably on Quenya).
    if (frame && (frame.isConnected === false || hiddenByCss(frame, styleOf))) return true;
    return false;
}
