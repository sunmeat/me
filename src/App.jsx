import React, { useEffect, useState, useRef } from "react";
import "./App.css";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "apps", label: "Apps" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const STATS = [
  { value: "6", label: "Published Android apps" },
  { value: "19+", label: "Years in software & teaching" },
  { value: "197", label: "Public repositories" },
  { value: "3.6k", label: "GitHub stars" },
];

const SKILL_GROUPS = [
  {
    title: "Mobile",
    note: "primary focus",
    items: ["Kotlin", "Java (Android SDK)", ".NET MAUI", "Android Studio", "Material Design"],
  },
  {
    title: "Languages",
    note: "core toolkit",
    items: ["C++", "C#", "Python", "JavaScript", "SQL", "PHP"],
  },
  {
    title: "Frameworks",
    note: "backend & web",
    items: ["ASP.NET Core", "Spring", "Django", "Node.js", "React", "Angular", "Electron.js"],
  },
  {
    title: "Tooling",
    note: "day to day",
    items: ["Git & GitHub", "Docker", "MySQL", "REST APIs", "CI basics", "Figma"],
  },
];

const APPS = [
  {
    name: "Voice Recorder",
    id: "sunmeat.recorder",
    rating: "4.9",
    tag: "Utility",
    desc:
        "A lightweight recorder for quick memos, lectures and interviews, built around a clean, distraction-free list of saved recordings.",
    url: "https://play.google.com/store/apps/details?id=sunmeat.recorder",
    mono: "VR",
  },
  {
    name: "Munchkin Level Counter",
    id: "sunmeat.munchkin",
    rating: null,
    tag: "Board Games",
    desc:
        "A digital level and treasure tracker for the Munchkin card game, replacing pen-and-paper scorekeeping at the table.",
    url: "https://play.google.com/store/apps/details?id=sunmeat.munchkin",
    mono: "ML",
  },
  {
    name: "QR Code Reader: Scan & Create!",
    id: "com.sunmeat.qr",
    rating: null,
    tag: "Utility",
    desc:
        "A fast, no-friction QR scanner that also generates custom codes for links, plain text and contact cards.",
    url: "https://play.google.com/store/apps/details?id=com.sunmeat.qr",
    mono: "QR",
  },
  {
    name: "Vzhuh Cat",
    id: "com.sunmeat.vzhuh",
    rating: "4.3",
    tag: "Casual Game",
    desc:
        "A playful, cat-themed mini game designed for quick, casual sessions and a bit of on-the-go fun.",
    url: "https://play.google.com/store/apps/details?id=com.sunmeat.vzhuh",
    mono: "VC",
  },
  {
    name: "Gullibility Test",
    id: "alex.gullibility",
    rating: "5.0",
    tag: "Quiz",
    desc:
        "A lighthearted quiz that puts players' gullibility to the test with a series of tricky, tongue-in-cheek questions.",
    url: "https://play.google.com/store/apps/details?id=alex.gullibility",
    mono: "GT",
  },
  {
    name: "Massage Kyiv",
    id: "massage.kyiv",
    rating: null,
    tag: "Local Business",
    desc:
        "A local-business app presenting services, pricing and booking details for a Kyiv-based massage studio.",
    url: "https://play.google.com/store/apps/details?id=massage.kyiv",
    mono: "MK",
  },
];

const REPOS = [
  { name: "AlexFM (private)", desc: "A modern, interactive web application built to deliver a seamless digital experience. This project showcases clean software engineering practices, modular architecture, and a highly responsive user interface.", lang: "React" },
  { name: "Versailles Cortège (private)", desc: "This project developed for an international logistics company specializing in two-way cargo transportation between Ukraine and France.", lang: "Django" },
  { name: "card", desc: "My interactive digital business card (npx sunmeat) right in your terminal", lang: "JavaScript" },
  { name: "maze", desc: "A dynamic, classic text-based roguelike game implemented in C++ using the Windows API to navigate a procedurally generated 40x10 maze. Control your hero to collect gold coins, evade roaming enemies that drain your health, and find the exit before it's too late.", lang: "C++" },
  { name: "stiralki", desc: "A modern web application tailored for appliance service management and showcase.", lang: "React" },
  { name: "MunchkinLevelCounter (private)", desc: "A digital interactive level counter for the Munchkin card game. It tracks the raw level without factoring in gender, gear bonuses, class abilities, curse effects, or other modifiers.", lang: "Java / Android" },
];

const EXPERIENCE = [
  {
    role: "Freelance Full-Stack & Android Developer",
    org: "Independent",
    time: "Jan 2019 — Present",
    desc:
        "Designing and shipping Android applications end to end — from architecture and UI to Play Store release — alongside full-stack web work for freelance clients.",
  },
  {
    role: "Leading Teacher Specialist",
    org: "IT Step Academy, Odesa",
    time: "Sep 2007 — Present",
    desc:
        "Teaching programming and software engineering to the next generation of developers, with a focus on C++, OOP fundamentals and Android development.",
  },
];

const EDUCATION = [
  {
    role: "Master's degree, Programming",
    org: "IT Academy Step, Odesa",
    time: "2005 — 2010",
  },
  {
    role: "Bachelor's degree, Economics",
    org: "Open International University of Human Development \u201CUkraine\u201D, Mykolaiv",
    time: "2005 — 2010",
  },
];

const COFFEE_URL = "https://send.monobank.ua/2YRyvEGWAn";

const SOCIALS = [
  { label: "Telegram", href: "https://t.me/sunmeat", icon: "telegram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sunmeat/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/sunmeat", icon: "github" },
  { label: "HackerRank", href: "https://www.hackerrank.com/sunmeat", icon: "code" },
  { label: "Google Developer", href: "https://g.dev/sunmeat", icon: "google" },
];

const TERMINAL_LINES = [
  { k: "name", v: "Oleksandr Zahoruiko" },
  { k: "role", v: "Android & Software Engineer" },
  { k: "base", v: "Odesa, Ukraine" },
  { k: "focus", v: "Kotlin \u00B7 Java \u00B7 React \u00B7 Node.js" },
  { k: "status", v: "available for freelance work" },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "telegram":
      return (
          <svg {...common}>
            <path d="M21 4L3 11.5l6.5 2.2M21 4L15.7 20l-6.2-6.3M21 4L9.2 13.9" />
          </svg>
      );
    case "linkedin":
      return (
          <svg {...common}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8" />
            <path d="M12 16v-3.2c0-1.2.9-1.8 1.9-1.8 1 0 1.6.7 1.6 1.9V16" />
          </svg>
      );
    case "github":
      return (
          <svg {...common}>
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1a3.3 3.3 0 0 0-.1 2.5 3.5 3.5 0 0 0-1 2.5c0 3.5 2 4.3 4 4.5-.5.5-.5 1-.5 2V21" />
          </svg>
      );
    case "code":
      return (
          <svg {...common}>
            <polyline points="8 6 2 12 8 18" />
            <polyline points="16 6 22 12 16 18" />
          </svg>
      );
    case "google":
      return (
          <svg {...common}>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
          </svg>
      );
    case "mail":
      return (
          <svg {...common}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
      );
    case "phone":
      return (
          <svg {...common}>
            <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.3 1.3 0 0 1 1.3-.3c1 .3 2 .5 3.1.5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C11.6 21.2 2.8 12.4 2.8 3.2 2.8 2.5 3.3 2 4 2h3.4c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.1.5 3.1.1.4 0 .9-.3 1.3z" />
          </svg>
      );
    case "pin":
      return (
          <svg {...common}>
            <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.2" />
          </svg>
      );
    case "arrow":
      return (
          <svg {...common}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
      );
    case "external":
      return (
          <svg {...common}>
            <path d="M14 4h6v6" />
            <path d="M10 14L20 4" />
            <path d="M19 13v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
          </svg>
      );
    case "star":
      return (
          <svg {...common} fill="currentColor" stroke="none">
            <polygon points="12 2.5 15 9 22 9.8 17 14.4 18.3 21.3 12 17.9 5.7 21.3 7 14.4 2 9.8 9 9" />
          </svg>
      );
    case "menu":
      return (
          <svg {...common}>
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
      );
    case "close":
      return (
          <svg {...common}>
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
      );
    case "coffee":
      return (
          <svg {...common}>
            <path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
            <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
            <path d="M8 3.5c-.6.6-.6 1.4 0 2s.6 1.4 0 2" />
            <path d="M12 3.5c-.6.6-.6 1.4 0 2s.6 1.4 0 2" />
          </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
        { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <button className="nav__brand" onClick={() => go("top")}>
            <span className="nav__brand-mark">OZ</span>
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
            <Icon name="coffee" size={15} />
            Buy me a coffee
          </a>

          <a className="btn btn--ghost nav__cta" href="mailto:sunmeatrich@gmail.com">
            Hire me
          </a>

          <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <Icon name={open ? "close" : "menu"} />
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

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Terminal() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
      <div className={`terminal ${started ? "is-running" : ""}`} ref={ref}>
        <div className="terminal__bar">
          <span className="terminal__dot" />
          <span className="terminal__dot" />
          <span className="terminal__dot" />
          <span className="terminal__title">zsh — sunmeat</span>
        </div>
        <div className="terminal__body">
          <div className="terminal__row">
            <span className="terminal__prompt">$</span> npx sunmeat
          </div>
          {TERMINAL_LINES.map((line, i) => (
              <div
                  className="terminal__row terminal__row--out"
                  key={line.k}
                  style={{ animationDelay: `${0.35 + i * 0.16}s` }}
              >
                <span className="terminal__key">{line.k}:</span> {line.v}
              </div>
          ))}
          <div className="terminal__row terminal__row--out" style={{ animationDelay: "1.25s" }}>
            <span className="terminal__prompt">$</span>
            <span className="terminal__cursor" />
          </div>
        </div>
      </div>
  );
}

function Hero() {
  return (
      <section className="hero" id="top">
        <div className="hero__inner">
          <div className="hero__copy">
            <Eyebrow>$ whoami</Eyebrow>
            <h1 className="hero__title">
              Oleksandr Zahoruiko —<br />
              <span className="hero__title-accent">Android App Developer</span>
            </h1>
            <p className="hero__lede">
              Odesa-based software engineer and lecturer building native Android applications end
              to end — from first sketch to a live listing on Google Play. Six shipped apps,
              nineteen years of writing and teaching code.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#apps" onClick={(e) => {
                e.preventDefault();
                document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" });
              }}>
                View published apps
                <Icon name="arrow" size={16} />
              </a>
              <a className="btn btn--ghost" href="mailto:sunmeatrich@gmail.com">
                Start a project
              </a>
            </div>
          </div>

          <Terminal />
        </div>

        <div className="hero__stats">
          {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <div className="hero__stat-value">{s.value}</div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
          ))}
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
      <section className="section" id="about">
        <div className="section__inner about">
          <div className="about__media">
            <div className="about__frame">
              <img
                  src="https://avatars.githubusercontent.com/u/7753892?v=4"
                  alt="Oleksandr Zahoruiko"
                  className="about__photo"
                  loading="lazy"
              />
            </div>
            <div className="about__location">
              <Icon name="pin" size={15} />
              Odesa, Ukraine
            </div>
          </div>

          <div className="about__copy">
            <Eyebrow>$ cat about.md</Eyebrow>
            <h2 className="section__title">Engineer by trade, teacher by habit.</h2>
            <p>
              I'm a software engineer and university lecturer based in Odesa, Ukraine, with a
              background in both programming and economics. For close to two decades I've split my
              time between the classroom and the codebase — teaching the next generation of
              developers by day, and shipping production software by night.
            </p>
            <p>
              My focus today is native Android development: turning a product idea into a
              responsive, reliable app that reaches real users on Google Play. I care about clean
              architecture, honest timelines and code that's still easy to read a year later —
              qualities that come naturally after years of explaining them to students.
            </p>
            <p>
              Outside of work, I'm a keen photographer and a multi-instrumentalist, which is
              probably why I notice when an interface is a half-beat out of rhythm.
            </p>
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills                                                              */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
      <section className="section section--alt" id="skills">
        <div className="section__inner">
          <Eyebrow>$ ls skills/</Eyebrow>
          <h2 className="section__title">A toolkit built for shipping, not just prototyping.</h2>
          <div className="skills__grid">
            {SKILL_GROUPS.map((group) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-card__head">
                    <h3>{group.title}</h3>
                    <span className="skill-card__note">{group.note}</span>
                  </div>
                  <div className="skill-card__tags">
                    {group.items.map((item) => (
                        <span className="tag" key={item}>
                    {item}
                  </span>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Apps                                                                */
/* ------------------------------------------------------------------ */

function AppCard({ app }) {
  return (
      <a className="app-card" href={app.url} target="_blank" rel="noopener noreferrer">
        <div className="app-card__top">
          <div className="app-card__icon">{app.mono}</div>
          <div className="app-card__heading">
            <h3>{app.name}</h3>
            <span className="app-card__pkg">{app.id}</span>
          </div>
        </div>
        <p className="app-card__desc">{app.desc}</p>
        <div className="app-card__foot">
          <span className="tag tag--soft">{app.tag}</span>
          {app.rating ? (
              <span className="app-card__rating">
            <Icon name="star" size={13} />
                {app.rating}
          </span>
          ) : (
              <span className="app-card__rating app-card__rating--new">New listing</span>
          )}
          <span className="app-card__link">
          Google Play <Icon name="external" size={13} />
        </span>
        </div>
      </a>
  );
}

function Apps() {
  return (
      <section className="section" id="apps">
        <div className="section__inner">
          <Eyebrow>$ ls apps/ --published</Eyebrow>
          <h2 className="section__title">Live on Google Play right now.</h2>
          <p className="section__sub">
            Six apps across utilities, casual games and local business tools — each one designed,
            built and published independently.
          </p>
          <div className="apps__grid">
            {APPS.map((app) => (
                <AppCard app={app} key={app.id} />
            ))}
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Open source                                                        */
/* ------------------------------------------------------------------ */

function OpenSource() {
  return (
      <section className="section section--alt" id="opensource">
        <div className="section__inner">
          <Eyebrow>$ git log --stat</Eyebrow>
          <div className="opensource__head">
            <h2 className="section__title">Open source &amp; teaching material.</h2>
            <a
                className="btn btn--ghost"
                href="https://github.com/sunmeat"
                target="_blank"
                rel="noopener noreferrer"
            >
              View GitHub profile
              <Icon name="external" size={15} />
            </a>
          </div>
          <div className="repos__grid">
            {REPOS.map((r) => (
                <a
                    className="repo-card"
                    href={`https://github.com/sunmeat/${r.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={r.name}
                >
                  <div className="repo-card__name">{r.name}</div>
                  <p className="repo-card__desc">{r.desc}</p>
                  <span className="repo-card__lang">
                <span className="repo-card__dot" />
                    {r.lang}
              </span>
                </a>
            ))}
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
      <section className="section" id="experience">
        <div className="section__inner">
          <Eyebrow>$ cat experience.log</Eyebrow>
          <h2 className="section__title">Experience &amp; education.</h2>

          <div className="timeline">
            <h3 className="timeline__group">Experience</h3>
            {EXPERIENCE.map((e) => (
                <div className="timeline__item" key={e.role}>
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <div className="timeline__row">
                      <h4>{e.role}</h4>
                      <span className="timeline__time">{e.time}</span>
                    </div>
                    <div className="timeline__org">{e.org}</div>
                    <p>{e.desc}</p>
                  </div>
                </div>
            ))}
          </div>

          <div className="timeline">
            <h3 className="timeline__group">Education</h3>
            {EDUCATION.map((e) => (
                <div className="timeline__item" key={e.role}>
                  <div className="timeline__marker" />
                  <div className="timeline__content">
                    <div className="timeline__row">
                      <h4>{e.role}</h4>
                      <span className="timeline__time">{e.time}</span>
                    </div>
                    <div className="timeline__org">{e.org}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
      <section className="section section--alt" id="contact">
        <div className="section__inner contact">
          <div className="contact__copy">
            <Eyebrow>$ contact --init</Eyebrow>
            <h2 className="section__title">Let's build your Android app.</h2>
            <p>
              Open to freelance projects, long-term collaborations and consulting work. Based in
              Odesa, Ukraine (UTC+3) — I typically reply within a business day.
            </p>

            <div className="contact__details">
              <a className="contact__row" href="mailto:sunmeatrich@gmail.com">
                <Icon name="mail" size={17} />
                sunmeatrich@gmail.com
              </a>

              <div className="contact__row contact__row--static">
                <Icon name="pin" size={17} />
                Odesa, Ukraine
              </div>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary" href="mailto:sunmeatrich@gmail.com">
                Email me
              </a>
              <a
                  className="btn btn--ghost"
                  href="https://t.me/sunmeat"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Message on Telegram
              </a>
            </div>
          </div>

          <div className="contact__socials">
            {SOCIALS.map((s) => (
                <a
                    className="social-row"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={s.label}
                >
              <span className="social-row__icon">
                <Icon name={s.icon} size={17} />
              </span>
                  <span className="social-row__label">{s.label}</span>
                  <Icon name="external" size={14} />
                </a>
            ))}
          </div>
        </div>
      </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
      <footer className="footer">
        <div className="footer__inner">
          <span>© 2019-{new Date().getFullYear()} • Oleksandr Zahoruiko • Built with React & Vite • Available for projects</span>
          <a className="coffee-btn" href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="coffee" size={15} />
            Buy me one more coffee
          </a>
          <button
              className="footer__top"
              onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
          >
            Back to top
            <Icon name="arrow" size={14} />
          </button>
        </div>
      </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
      <div className="page">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Apps />
          <OpenSource />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}