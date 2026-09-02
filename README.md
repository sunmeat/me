# Software Developer Portfolio — sunmeat.shop 

A single-page portfolio built to present **Oleksandr Zahoruiko** — Orléans-based Android developer, software engineer and lecturer — to clients, recruiters and advertisers.

The design leans into the developer's own identity: a dark, engineering-grade palette, a terminal-style hero section that echoes the real `npx sunmeat` easter egg from his GitHub profile, and section labels styled as shell commands (`$ whoami`, `$ ls skills/`, `$ git log --stat` …).

---

## ✨ Features

- **Terminal hero** — a typed, self-animating terminal window introducing the developer, triggered on scroll into view
- **Live stats bar** — published apps, years of experience, repositories, GitHub stars
- **Skills matrix** — grouped by Mobile / Languages / Frameworks / Tooling
- **App showcase** — real, linked Google Play listings with ratings and package IDs
- **Open source grid** — highlighted GitHub repositories with live links
- **Experience & education timeline**
- **Contact section** — direct email/Telegram links plus a full social row (LinkedIn, GitHub, HackerRank, Google Developer profile)
- **"Buy me a coffee"** support button (Monobank) in both the navigation/contact area and the footer
- Sticky navigation with scroll-based active-section highlighting
- Fully responsive, down to small mobile screens
- Zero external UI dependencies — plain React + hand-drawn inline SVG icons

---

## 🛠 Tech Stack

| Layer      | Choice                                              |
|------------|------------------------------------------------------|
| Library    | React (functional components + hooks)                |
| Styling    | Plain CSS with a token-based design system (`App.css`) |
| Fonts      | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (terminal/labels) |
| Icons      | Inline SVG (no icon library)                          |
| Build tool | Vite                                                  |


## 📱 Content Source

All content — bio, education, experience, skills, and app listings — is pulled from:

- [github.com/sunmeat](https://github.com/sunmeat)
- [Google Play developer page](https://play.google.com/store/apps/developer?id=sunmeat)
- Personal contact channels (email, Telegram, LinkedIn)

Update the data arrays at the top of `App.jsx` (`APPS`, `SKILL_GROUPS`, `EXPERIENCE`, `EDUCATION`, `REPOS`, `SOCIALS`) to keep the site in sync as new apps ship or repositories are added.

---

## ☕ Support

If this portfolio (or the apps it showcases) was useful to you, consider [buying a coffee](https://send.monobank.ua/2YRyvEGWAn).

---

## 📬 Contact

- **Email:** [sunmeatrich@gmail.com](mailto:sunmeatrich@gmail.com)
- **Telegram:** [t.me/sunmeat](https://t.me/sunmeat)
- **LinkedIn:** [linkedin.com/in/sunmeat](https://www.linkedin.com/in/sunmeat/)

---

## 📄 License

© 2019–2026 Oleksandr Zahoruiko. All rights reserved.
