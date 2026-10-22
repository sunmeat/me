import {useEffect, useRef, useState} from "react";
import Icon from "./Icon.jsx";
import {NAV_LINKS, COFFEE_URL} from "../data.js";
import {useLanguage, withTranslation} from "../i18n.jsx";

function Flag({country, label}) {
    return (
        <img
            className="language-switcher__flag"
            src={`https://flagcdn.com/w40/${country}.png`}
            srcSet={`https://flagcdn.com/w80/${country}.png 2x`}
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
                            aria-label={language === "fr" ? "Choisir la langue" : "Choose language"}
                            aria-expanded={languageMenuOpen}
                            aria-haspopup="menu"
                        >
                            <Flag country={language === "fr" ? "fr" : "us"} label={language === "fr" ? "Drapeau français" : "United States flag"} />
                        </button>

                        {languageMenuOpen && (
                            <div className="language-switcher__menu" role="menu" aria-label={language === "fr" ? "Langue" : "Language"}>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "en"}
                                    className={`language-switcher__option ${language === "en" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("en")}
                                >
                                    <Flag country="us" label="United States flag" />
                                    <span>English</span>
                                    {language === "en" && <Icon name="check" size={15}/>}
                                </button>
                                <button
                                    type="button"
                                    role="menuitemradio"
                                    aria-checked={language === "fr"}
                                    className={`language-switcher__option ${language === "fr" ? "is-selected" : ""}`}
                                    onClick={() => chooseLanguage("fr")}
                                >
                                    <Flag country="fr" label="Drapeau français" />
                                    <span>Français</span>
                                    {language === "fr" && <Icon name="check" size={15}/>}
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
                    <Icon name="coffee" size={15}/>
                    Buy me a coffee
                </a>

                <a className="btn btn--ghost nav__cta" href="mailto:sunmeatrich@gmail.com">
                    Hire me
                </a>

                <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
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
                        Hire me
                    </a>
                </div>
            )}
        </header>
    );
}

export default withTranslation(Nav);