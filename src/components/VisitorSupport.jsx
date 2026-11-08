import {useEffect, useState} from "react";
import {useLanguage} from "../i18n.jsx";
import {adSupportCopyFor} from "../ad-support-locales.js";
import {detectsAdBlocking} from "../ad-support-detection.js";
import "./styles/VisitorSupport.css";

const DISMISS_KEY = "sunmeat-support-reminder-dismissed";

function wasDismissed() {
    try {
        return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
        return false;
    }
}

export default function VisitorSupport() {
    const {language} = useLanguage();
    const copy = adSupportCopyFor(language);
    const [dismissed, setDismissed] = useState(wasDismissed);
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        if (dismissed) return;

        // Generic cosmetic bait: hidden by many extensions, but never visible.
        // This does not fetch anything or report anything about the visitor.
        const bait = document.createElement("div");
        bait.className = "adsbox ad-banner adsbygoogle ad-placement";
        bait.setAttribute("aria-hidden", "true");
        bait.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:12px;height:12px;pointer-events:none";
        document.body.appendChild(bait);

        const check = () => {
            const frame = document.querySelector('iframe[data-aa="2461400"]');
            setBlocked(detectsAdBlocking({bait, frame, styleOf: element => window.getComputedStyle(element)}));
        };
        // Do not mistake a slow network, empty AADS inventory, or a pending
        // iframe load for a blocker. Only an actual cosmetic hiding is evidence.
        const initial = window.setTimeout(check, 1800);
        const later = window.setTimeout(check, 4700);
        let visibilityTimer;
        const onVisibilityChange = () => {
            if (document.visibilityState !== "visible") return;
            window.clearTimeout(visibilityTimer);
            visibilityTimer = window.setTimeout(check, 450);
        };
        document.addEventListener("visibilitychange", onVisibilityChange);

        return () => {
            window.clearTimeout(initial);
            window.clearTimeout(later);
            window.clearTimeout(visibilityTimer);
            document.removeEventListener("visibilitychange", onVisibilityChange);
            bait.remove();
        };
    }, [dismissed]);

    const dismiss = () => {
        setDismissed(true);
        setBlocked(false);
        try {
            sessionStorage.setItem(DISMISS_KEY, "1");
        } catch {
            // Storage is optional: visitors may still dismiss the message.
        }
    };

    if (!blocked || dismissed) return null;

    return (
        <aside className="visitor-support" role="status" aria-label={copy.title} lang={language === "ko-KP" ? "ko" : language} dir={language === "ar" ? "rtl" : "ltr"}>
            <div className="visitor-support__icon" aria-hidden="true">✦</div>
            <div className="visitor-support__content">
                <strong className="visitor-support__title">{copy.title}</strong>
                <p className="visitor-support__description">{copy.body}</p>
                <button type="button" className="visitor-support__continue" onClick={dismiss}>
                    {copy.dismiss}
                </button>
            </div>
            <button type="button" className="visitor-support__close" onClick={dismiss} aria-label={copy.close} title={copy.close}>
                <span aria-hidden="true">×</span>
            </button>
        </aside>
    );
}
