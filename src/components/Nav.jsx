import {useEffect, useState} from "react";
import Icon from "./Icon.jsx";
import {
    NAV_LINKS,
    COFFEE_URL,
} from "../data.js";

function FrenchFlag({size = 22}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={{borderRadius: 4, display: "block"}}>
            <rect x="0" y="0" width="8" height="24" fill="#0055A4"/>
            <rect x="8" y="0" width="8" height="24" fill="#FFFFFF"/>
            <rect x="16" y="0" width="8" height="24" fill="#EF4135"/>
        </svg>
    );
}

function Nav() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("about");
    const [scrolled, setScrolled] = useState(false);

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

    const go = (id) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
            <div className="nav__inner">
                <button className="nav__brand" onClick={() => go("top")}>
                    <span className="nav__brand-mark">
                        <FrenchFlag size={22}/>
                    </span>
                    <span className="nav__brand-text">
            sunmeat<span className="dim">.shop</span>
          </span>
                </button>

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

export default Nav;