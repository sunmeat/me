import {useEffect, useRef} from "react";
import {useLanguage} from "../i18n.jsx";
import "./styles/AadsBanner.css";

const AD_UNIT_ID = "aads-unit-2461400";
const LABELS = {
    uk: ["Реклама", "Рекламне оголошення"],
    en: ["Advertisement", "Advertising"],
    fr: ["Publicité", "Faire de la publicité"],
    "pt-BR": ["Publicidade", "Anuncie aqui"],
    es: ["Publicidad", "Anúnciate aquí"],
    de: ["Werbung", "Hier werben"],
    ja: ["広告", "ここに広告を掲載"],
    zh: ["广告", "在此投放广告"],
    ar: ["إعلان", "أعلن هنا"],
    sa: ["विज्ञापनम्", "अत्र विज्ञापनं ददातु"],
};

export default function AadsBanner() {
    const slotRef = useRef(null);
    const {language} = useLanguage();
    const [label] = LABELS[language] || LABELS.en;

    // AADS must find its real iframe in the initial HTML, even if its crawler
    // doesn't execute JavaScript. Move that single existing node to the designed
    // placement once React mounts, without recreating the iframe on re-renders.
    useEffect(() => {
        const unit = document.getElementById(AD_UNIT_ID);
        if (unit && slotRef.current && unit.parentElement !== slotRef.current) {
            slotRef.current.appendChild(unit);
        }
    }, []);

    return (
        <aside className="aads-banner section" aria-label={label}>
            <div className="aads-banner__inner section__inner">
                <p className="aads-banner__label">{label}</p>
                <div className="aads-banner__slot" ref={slotRef}/>
            </div>
        </aside>
    );
}
