<div align="center">

# ⚡ sunmeat.shop

### Personal portfolio of Oleksandr Zahoruiko
**Android & Full-Stack Developer · IT Lecturer**

Building native Android apps, full-stack web projects, and tools that make learning and everyday life a little better.

[![Live Site](https://img.shields.io/badge/Portfolio-sunmeat.shop-00e676?style=for-the-badge&logo=vercel&logoColor=white)](https://sunmeat.shop)
[![GitHub](https://img.shields.io/badge/GitHub-sunmeat-181717?style=for-the-badge&logo=github)](https://github.com/sunmeat)
[![npm](https://img.shields.io/badge/npm-sunmeat-cb3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/sunmeat)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=for-the-badge)](./LICENSE.md)

<br/>

<img src="https://sunmeat.shop/preview.jpg" alt="Preview of the sunmeat.shop portfolio" width="800"/>

</div>

---

## About

This repository contains the source code for [sunmeat.shop](https://sunmeat.shop), a dark, terminal-inspired portfolio showcasing my software development and teaching work.

The site brings together my background, technical skills, published Android apps, live websites, open-source projects, and contact information.

## Portfolio at a glance

| | |
|---|---|
| **10** | Published websites |
| **6** | Android apps showcased on Google Play |
| **19+ years** | Software development and teaching |
| **241+** | GitHub repositories |

Numbers and showcased projects reflect the portfolio data and may change over time.

## Features

- Terminal-style hero section and interactive CLI card
- Responsive layout for mobile, tablet, and desktop
- Skills grouped by mobile development, languages, frameworks, and tooling
- Published Android apps with direct Google Play links
- Live website and open-source project showcases
- Experience timeline and contact links
- Interactive profile card with comments powered by Firebase
- SEO metadata, Open Graph previews, and structured data
- Vercel Web Analytics

## Tech stack

- **Frontend:** React 19, JavaScript, Vite
- **Styling:** plain CSS with a token-based design system
- **Backend service:** Firebase / Firestore for profile comments
- **Analytics:** Vercel Web Analytics
- **Quality:** oxlint
- **Deployment:** Vercel

## Run locally

Requirements: a recent Node.js version and npm.

```bash
git clone https://github.com/sunmeat/me.git
cd me
npm install
npm run dev
```

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

Run lint checks:

```bash
npm run lint
```

Some interactive features rely on Firebase configuration. Without valid configuration, those features may not work in a local environment.

## Project structure

```text
me/
├── public/             # Static assets and preview images
├── src/
│   ├── components/     # Page sections and reusable UI
│   ├── App.jsx         # Main page composition
│   ├── data.js         # Portfolio text, skills, apps, sites, and stats
│   ├── firebase.js     # Firebase setup
│   ├── App.css         # Design system and responsive styles
│   └── main.jsx        # Application entry point
├── docs/               # Project documentation
├── .github/            # Templates and repository automation
├── index.html          # Metadata and document shell
└── package.json
```

Portfolio content is primarily maintained in `src/data.js`. Page sections and reusable components live in `src/components/`.

## Documentation

Documentation is available in English and Russian:

- [Documentation index](docs/README.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Content guide](docs/CONTENT-GUIDE.md)
- [Design system](docs/DESIGN-SYSTEM.md)
- [Development and deployment](docs/DEPLOYMENT.md)
- [Quality checklist](docs/QUALITY-CHECKLIST.md)
- [SEO and metadata](docs/SEO-AND-METADATA.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)

Repository contribution templates, automation, and security guidance are documented in [`.github/README.md`](.github/README.md).

## Contact

- **Website:** [sunmeat.shop](https://sunmeat.shop)
- **GitHub:** [github.com/sunmeat](https://github.com/sunmeat)
- **Telegram:** [t.me/sunmeat](https://t.me/sunmeat)
- **Email:** [sunmeatrich@gmail.com](mailto:sunmeatrich@gmail.com)
- **npm CLI card:** [npx sunmeat](https://www.npmjs.com/package/sunmeat)

## License

© Oleksandr Zahoruiko. All rights reserved.

This is a personal portfolio. The source is publicly viewable for reference and learning, but the design, structure, and content may not be copied and presented as someone else's work. See [LICENSE.md](./LICENSE.md) for the full terms.
