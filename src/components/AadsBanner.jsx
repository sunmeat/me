import {useEffect, useRef} from "react";
import {useLanguage} from "../i18n.jsx";
import {adSupportCopyFor} from "../ad-support-locales.js";
import "./styles/AadsBanner.css";

const AD_UNIT_ID = "aads-unit-2461400";
export default function AadsBanner() {
    const slotRef = useRef(null);
    const {language} = useLanguage();
    const {ad: label, advertise} = adSupportCopyFor(language);

    // AADS must find its real iframe in the initial HTML, even if its crawler
    // doesn't execute JavaScript. Move that single existing node to the designed
    // placement once React mounts, without recreating the iframe on re-renders.
    useEffect(() => {
        const unit = document.getElementById(AD_UNIT_ID);
        if (unit && slotRef.current && unit.parentElement !== slotRef.current) {
            slotRef.current.appendChild(unit);
        }
        // The advertiser link lives in the crawler-visible HTML; localize it
        // after mounting without changing the external AADS destination.
        const link = unit?.querySelector("#frame-link");
        if (link) link.textContent = advertise;
    }, [advertise]);

    return (
        <aside className="aads-banner section" aria-label={label}>
            <div className="aads-banner__inner section__inner">
                <p className="aads-banner__label">{label}</p>
                <div className="aads-banner__slot" ref={slotRef}/>
            </div>
        </aside>
    );
}
