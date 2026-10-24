import {useEffect, useRef, useState} from "react";
import Icon from "./Icon.jsx";
import {NAV_LINKS, COFFEE_URL} from "../data.js";
import {useLanguage, withTranslation} from "../i18n.jsx";

function Flag({country, label}) {
    if (country === "hv" || country === "qya" || country === "av" || country === "cu") {
        return <span className="language-switcher__flag" role="img" aria-label={label}>{country === "qya" ? "🍃" : country === "av" ? "🩰" : country === "cu" ? "📜" : "🐉"}</span>;
    }
    return (
        <img
            className="language-switcher__flag"
            src={country === "od" ? "/odesa-flag.svg" : `https://flagcdn.com/w40/${country}.png`}
            srcSet={country === "od" ? undefined : `https://flagcdn.com/w80/${country}.png 2x`}
            width="24"
            height="18"
            alt={label}
        />
    );
}

function Nav() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("about");
    const [scrolled, setScrolled] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const languageSwitcherRef = useRef(null);
    const {language, setLanguage} = useLanguage();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
        if (!sections.length) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            {rootMargin: "-45% 0px -45% 0px"}
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const closeOnOutsideClick = (event) => {
            if (!languageSwitcherRef.current?.contains(event.target)) setLanguageMenuOpen(false);
        };
        document.addEventListener("pointerdown", closeOnOutsideClick);
        return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
    }, []);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setLanguageMenuOpen(false);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    const go = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    const chooseLanguage = (nextLanguage) => {
        setLanguage(nextLanguage);
        setLanguageMenuOpen(false);
    };

    return (
        <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <div className="nav__inner">
                <div className="nav__brand-group">
                    <div className="language-switcher language-switcher--brand" ref={languageSwitcherRef}>
                        <button
                            type="button"
                            className={`language-switcher__trigger ${languageMenuOpen ? "is-open" : ""}`}
                            onClick={() => setLanguageMenuOpen((value) => !value)}
                            aria-label={language === "fr" ? "Choisir la langue" : language === "pt-BR" ? "Escolher idioma" : language === "es" ? "Elegir idioma" : language === "ru" ? "Выбрать язык" : language === "ko-KP" ? "언어 선택" : language === "zh" ? "选择语言" : language === "ar" ? "اختر اللغة" : language === "hv" ? "Vēzos gōntan" : language === "ja" ? "言語を選択" : language === "sa" ? "भाषां वृणोतु" : language === "od" ? "Выбрать одесский язык" : "Choose language"}
                            aria-expanded={languageMenuOpen}
                            aria-haspopup="menu"
                        >
                            <Flag country={language === "fr" ? "fr" : language === "pt-BR" ? "br" : language === "es" ? "es" : language === "ru" ? "ru" : language === "ko-KP" ? "kp" : language === "zh" ? "cn" : language === "ar" ? "sa" : language === "sa" ? "in" : language === "ja" ? "jp" : language === "de" ? "de" : language === "hv" ? "hv" : language === "od" ? "od" : language === "cu" ? "cu" : "us"} label={language === "cu" ? "Свиток церковнославянского языка" : language === "fr" ? "Drapeau français" : language === "pt-BR" ? "Bandeira do Brasil" : language === "es" ? "Bandera de España" : language === "ru" ? "Russian flag" : language === "ko-KP" ? "조선민주주의인민공화국 국기" : language === "zh" ? "Chinese flag" : language === "ar" ? "علم المملكة العربية السعودية" : language === "sa" ? "India" : language === "ja" ? "日本の国旗" : language === "hv" ? "Three-headed dragon" : language === "od" ? "Флаг города Одессы" : "United States flag"} />
                        </button>

                        {languageMenuOpen && (
                            <div className="language-switcher__menu" role="menu" aria-label={language === "fr" ? "Langue" : language === "pt-BR" ? "Idioma" : language === "es" ? "Idioma" : language === "ru" ? "Язык" : language === "ko-KP" ? "언어" : language === "zh" ? "语言" : language === "ar" ? "اللغة" : language === "hv" ? "Vēzos" : language === "ja" ? "言語" : language === "sa" ? "भाषा" : language === "od" ? "Язык" : "Language"}>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "en"}
                                    className={`language-switcher__option ${language === "en" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("en")}
                                >
                                    <Flag country="us" label="United States flag" />
                                    <span className="language-switcher__label">English</span>
                                    {language === "en" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "hv"}
                                    className={`language-switcher__option ${language === "hv" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("hv")}
                                >
                                    <Flag country="hv" label="Three-headed dragon" />
                                    <span className="language-switcher__label">Valyrian</span>
                                    {language === "hv" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "cu"}
                                    className={`language-switcher__option ${language === "cu" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("cu")}
                                >
                                    <Flag country="cu" label="Свиток церковнославянского языка" />
                                    <span className="language-switcher__label">Славянский</span>
                                    {language === "cu" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "av"}
                                    className={`language-switcher__option ${language === "av" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("av")}
                                >
                                    <Flag country="av" label="Балетная туфелька" />
                                    <span className="language-switcher__label">Волочковский</span>
                                    {language === "av" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "qya"}
                                    className={`language-switcher__option ${language === "qya" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("qya")}
                                >
                                    <Flag country="qya" label="Quenya leaf symbol" />
                                    <span className="language-switcher__label">Quenya</span>
                                    {language === "qya" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "ja"}
                                    className={`language-switcher__option ${language === "ja" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("ja")}
                                >
                                    <Flag country="jp" label="日本の国旗" />
                                    <span className="language-switcher__label">日本語</span>
                                    {language === "ja" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "de"}
                                    className={`language-switcher__option ${language === "de" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("de")}
                                >
                                    <Flag country="de" label="Flagge Deutschlands" />
                                    <span className="language-switcher__label">Deutsch</span>
                                    {language === "de" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "fr"}
                                    className={`language-switcher__option ${language === "fr" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("fr")}
                                >
                                    <Flag country="fr" label="Drapeau français" />
                                    <span className="language-switcher__label">Français</span>
                                    {language === "fr" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "es"}
                                    className={`language-switcher__option ${language === "es" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("es")}
                                >
                                    <Flag country="es" label="Bandera de España" />
                                    <span className="language-switcher__label">Español</span>
                                    {language === "es" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "ru"}
                                    className={`language-switcher__option ${language === "ru" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("ru")}
                                >
                                    <Flag country="ru" label="Russian flag" />
                                    <span className="language-switcher__label">Русский</span>
                                    {language === "ru" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "zh"}
                                    className={`language-switcher__option ${language === "zh" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("zh")}
                                >
                                    <Flag country="cn" label="Chinese flag" />
                                    <span className="language-switcher__label">中文</span>
                                    {language === "zh" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "ko-KP"}
                                    className={`language-switcher__option ${language === "ko-KP" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("ko-KP")}
                                >
                                    <Flag country="kp" label="조선민주주의인민공화국 국기" />
                                    <span className="language-switcher__label">조선말</span>
                                    {language === "ko-KP" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "ar"}
                                    className={`language-switcher__option ${language === "ar" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("ar")}
                                >
                                    <Flag country="sa" label="علم المملكة العربية السعودية" />
                                    <span className="language-switcher__label">العربية</span>
                                    {language === "ar" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "sa"}
                                    className={`language-switcher__option ${language === "sa" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("sa")}
                                >
                                    <Flag country="in" label="India" />
                                    <span className="language-switcher__label">संस्कृतम्</span>
                                    {language === "sa" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "od"}
                                    className={`language-switcher__option ${language === "od" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("od")}
                                >
                                    <Flag country="od" label="Флаг города Одессы" />
                                    <span className="language-switcher__label">Одесский</span>
                                    {language === "od" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "pt-BR"}
                                    className={`language-switcher__option ${language === "pt-BR" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("pt-BR")}
                                >
                                    <Flag country="br" label="Bandeira do Brasil" />
                                    <span className="language-switcher__label">Português</span>
                                    {language === "pt-BR" && <Icon name="check" size={15}/>}
                                </button>
                            </div>
                        )}
                    </div>
                    <button className="nav__brand" onClick={() => go("top")}>
                        <span className="nav__brand-text">
                            sunmeat<span className="dim">.dev</span>
                        </span>
                    </button>
                </div>

                <nav className="nav__links">
                    {NAV_LINKS.map((l) => (
                        <button
                            key={l.id}
                            className={`nav__link ${active === l.id ? "is-active" : ""}`}
                            onClick={() => go(l.id)}
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                <a className="btn btn--coffee" href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                    <Icon name={language === "cu" ? "goblet" : "coffee"} size={15}/>
                    {language === "cu" ? "Подаяніе" : "Buy me a coffee"}
                </a>

                <a className="btn btn--ghost nav__cta" href="mailto:sunmeatrich@gmail.com">
                    Hire me
                </a>

                <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label={language === "cu" ? "Отверзи или затвори врата" : "Toggle menu"}>
                    <Icon name={open ? "close" : "menu"}/>
                </button>
            </div>

            {open && (
                <div className="nav__mobile">
                    {NAV_LINKS.map((l) => (
                        <button key={l.id} className="nav__mobile-link" onClick={() => go(l.id)}>
                            {l.label}
                        </button>
                    ))}
                    <a className="btn btn--primary" href="mailto:sunmeatrich@gmail.com" onClick={() => setOpen(false)}>
                        {language === "cu" ? "Призови мя на служеніе" : "Hire me"}
                    </a>
                </div>
            )}
        </header>
    );
}

export default withTranslation(Nav);