import {useEffect, useId, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {useLanguage} from "../i18n.jsx";
import {adSupportCopyFor} from "../ad-support-locales.js";
import {detectsAdBlocking, detectsNetworkAdBlocking} from "../ad-support-detection.js";
import "./styles/VisitorSupport.css";

const DISMISS_KEY = "sunmeat-support-reminder-dismissed";

function wasDismissed() {
    try {
        return sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
        return false;
    }
}

function previewRequested() {
    try {
        return new URLSearchParams(window.location.search).get("adblock-preview") === "1";
    } catch {
        return false;
    }
}

export default function VisitorSupport() {
    const {language} = useLanguage();
    const copy = adSupportCopyFor(language);
    const [dismissed, setDismissed] = useState(wasDismissed);
    const [blocked, setBlocked] = useState(false);
    const [preview] = useState(previewRequested);
    const titleId = useId();
    const descriptionId = useId();
    const continueRef = useRef(null);
    const closeRef = useRef(null);
    const visible = !dismissed && (blocked || preview);

    const dismiss = () => {
        setDismissed(true);
        setBlocked(false);
        try {
            sessionStorage.setItem(DISMISS_KEY, "1");
        } catch {
            // Dismiss still works when browser storage is unavailable.
        }
    };

    useEffect(() => {
        if (dismissed || preview) return;

        let active = true;
        const controller = new AbortController();
        const bait = document.createElement("div");
        bait.className = "adsbox ad-banner adsbygoogle ad-placement";
        bait.setAttribute("aria-hidden", "true");
        bait.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:12px;height:12px;pointer-events:none";
        document.body.appendChild(bait);

        const checkCosmetic = () => {
            if (!active) return;
            const frame = document.querySelector('iframe[data-aa="2461400"]');
            if (detectsAdBlocking({bait, frame, styleOf: element => window.getComputedStyle(element)})) {
                setBlocked(true);
            }
        };

        const checkNetwork = async () => {
            // Ad network requests may be blocked independently of cosmetic CSS.
            const isOnline = window.navigator.onLine !== false;
            const isBlocked = await detectsNetworkAdBlocking(
                window.fetch.bind(window), isOnline, controller.signal
            );
            if (active && isBlocked) setBlocked(true);
        };

        const initial = window.setTimeout(checkCosmetic, 800);
        const network = window.setTimeout(checkNetwork, 1400);
        const later = window.setTimeout(checkCosmetic, 3500);
        const onVisible = () => {
            if (document.visibilityState === "visible") checkCosmetic();
        };
        document.addEventListener("visibilitychange", onVisible);

        return () => {
            active = false;
            controller.abort();
            window.clearTimeout(initial);
            window.clearTimeout(network);
            window.clearTimeout(later);
            document.removeEventListener("visibilitychange", onVisible);
            bait.remove();
        };
    }, [dismissed, preview]);

    useEffect(() => {
        if (!visible) return;
        const previousFocus = document.activeElement;
        const body = document.body;
        const originalOverflow = body.style.overflow;
        body.style.overflow = "hidden";
        continueRef.current?.focus();

        const onKeyDown = event => {
            if (event.key === "Escape") {
                event.preventDefault();
                dismiss();
            } else if (event.key === "Tab") {
                // Two controls only: keep keyboard focus inside the dialog.
                const first = continueRef.current;
                const last = closeRef.current;
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
            body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", onKeyDown);
            previousFocus?.focus?.();
        };
    }, [visible]);

    if (!visible) return null;

    return createPortal(
        <div className="visitor-support__overlay" onMouseDown={event => {
            if (event.target === event.currentTarget) dismiss();
        }}>
            <section
                className="visitor-support"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                lang={language === "ko-KP" ? "ko" : language}
                dir={language === "ar" ? "rtl" : "ltr"}
            >
                <div className="visitor-support__icon" aria-hidden="true">✦</div>
                <div className="visitor-support__content">
                    <h2 id={titleId} className="visitor-support__title">{copy.title}</h2>
                    <p id={descriptionId} className="visitor-support__description">{copy.body}</p>
                    <button ref={continueRef} type="button" className="visitor-support__continue" onClick={dismiss}>
                        {copy.dismiss}
                    </button>
                </div>
                <button ref={closeRef} type="button" className="visitor-support__close" onClick={dismiss} aria-label={copy.close} title={copy.close}>
                    <span aria-hidden="true">×</span>
                </button>
            </section>
        </div>,
        document.body
    );
}
