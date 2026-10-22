import React, {createContext, useContext, useEffect, useState} from "react";

const SUPPORTED_LANGUAGES = ["en", "fr"];

const LanguageContext = createContext({language: "en", setLanguage: () => {}});

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(() => {
        try {
            const storedLanguage = localStorage.getItem("sunmeat-language");
            return SUPPORTED_LANGUAGES.includes(storedLanguage) ? storedLanguage : "en";
        } catch {
            return "en";
        }
    });

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = language === "fr"
            ? "Oleksandr Zahoruiko — Développeur Android et Full-stack | Orléans, France"
            : "Oleksandr Zahoruiko — Android & Full-Stack Developer | Orléans, France";

        const updateMeta = (selector, content) => {
            const element = document.querySelector(selector);
            if (element) element.setAttribute("content", content);
        };
        updateMeta('meta[name="description"]', language === "fr"
            ? "Ingénieur logiciel et enseignant basé à Orléans. Applications Android natives et développement web full-stack. Projets en ligne et ouvert aux collaborations freelance."
            : "Orléans-based software engineer & lecturer. Native Android apps end-to-end (Jetpack Compose, Kotlin) + full-stack web (React, Spring Boot, .NET, Node.js). Live side projects and open for freelance collaborations.");
        updateMeta('meta[property="og:title"]', language === "fr"
            ? "Oleksandr Zahoruiko — Développeur Android et Full-stack"
            : "Oleksandr Zahoruiko — Android & Full-Stack Developer");
        updateMeta('meta[property="og:description"]', language === "fr"
            ? "Applications Android natives, développement web full-stack et projets en ligne. Basé à Orléans, France. Disponible pour vos projets."
            : "Native Android apps end-to-end + full-stack web. Live side projects. 19+ years in software & teaching. Based in Orléans, France. Open for projects.");
        updateMeta('meta[name="twitter:title"]', language === "fr"
            ? "Oleksandr Zahoruiko — Développeur Android et Full-stack"
            : "Oleksandr Zahoruiko — Android & Full-Stack Developer");
        updateMeta('meta[name="twitter:description"]', language === "fr"
            ? "Applications Android natives et développement web full-stack. Projets en ligne. Basé à Orléans, France."
            : "Native Android apps end-to-end + full-stack web. Live side projects. Based in Orléans, France.");
        updateMeta('meta[property="og:locale"]', language === "fr" ? "fr_FR" : "en_US");
    }, [language]);

    const changeLanguage = (next) => {
        if (!SUPPORTED_LANGUAGES.includes(next)) return;
        setLanguage(next);
        try {
            localStorage.setItem("sunmeat-language", next);
        } catch {
            // Storage may be unavailable.
        }
        document.documentElement.lang = next;
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage: changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

const FR = {
    "About": "À propos",
    "Skills": "Compétences",
    "Apps": "Applications",
    "Experience": "Expérience",
    "Contact": "Contact",
    "Buy me a coffee": "Offrez-moi un café",
    "Hire me": "Me contacter",
    "Toggle menu": "Ouvrir ou fermer le menu",
    "View published sites": "Voir les sites publiés",
    "Start a project": "Démarrer un projet",
    "Published sites": "Sites publiés",
    "Published Android apps": "Applications Android publiées",
    "Years in software & teaching": "Années en développement et enseignement",
    "GitHub repositories": "Dépôts GitHub",
    "Engineer by trade, teacher by habit.": "Ingénieur de métier, enseignant par vocation.",
    "I'm a software engineer and university lecturer based in Orléans, France, with a background in both programming and economics. For close to two decades I've split my time between the classroom and the codebase — teaching the next generation of developers by day, and shipping production software by night.": "Je suis ingénieur logiciel et enseignant à l’université à Orléans, en France, avec une formation en programmation et en économie. Depuis près de vingt ans, je partage mon temps entre les salles de cours et le code : je forme la prochaine génération de développeurs le jour et je livre des logiciels en production le soir.",
    "Today my primary focus is native Android development, building polished, production-ready apps from idea to Google Play. Alongside Android, I develop full-stack web applications with React on the frontend and Spring Boot / Django / ASP.Net Core / Node.js on the backend. Whether it's mobile or web, I value clean architecture, maintainable code, realistic timelines, and software that's just as easy to understand a year later as it is on day one — principles I've refined through more than nineteen years of writing and teaching code.": "Aujourd’hui, je me concentre principalement sur le développement Android natif et crée des applications soignées, prêtes pour la production, de l’idée à Google Play. Je développe aussi des applications web full-stack avec React côté interface et Spring Boot, Django, ASP.NET Core ou Node.js côté serveur. Sur mobile comme sur le web, je privilégie une architecture claire, un code maintenable, des délais réalistes et des logiciels aussi faciles à comprendre un an plus tard qu’au premier jour. Ce sont des principes affinés au fil de plus de dix-neuf ans de développement et d’enseignement.",
    "Outside of work, I'm a keen photographer and a multi-instrumentalist, which is probably why I notice when an interface is a half-beat out of rhythm.": "En dehors du travail, je suis passionné de photographie et multi-instrumentiste. C’est sans doute pour cela que je remarque quand une interface perd le rythme d’une demi-mesure.",
    "Live on Google Play right now.": "Disponibles dès maintenant sur Google Play.",
    "Six apps across utilities, casual games and local business tools — each one designed, built and published independently.": "Six applications, entre outils pratiques, jeux occasionnels et solutions pour les commerces locaux, chacune conçue, développée et publiée de manière indépendante.",
    "Side projects, live on the web.": "Des projets personnels en ligne.",
    "A growing collection of small sites and experiments — deployed independently, each one built to try out an idea, a technique, or just for fun.": "Une collection grandissante de petits sites et d’expérimentations, déployés indépendamment pour explorer une idée, une technique ou simplement pour le plaisir.",
    "Open source & teaching material.": "Open source et ressources pédagogiques.",
    "View GitHub profile": "Voir le profil GitHub",
    "Technical skills": "Compétences techniques",
    "A toolkit shaped by production work, teaching, and constant experimentation.": "Une boîte à outils forgée par la production, l’enseignement et l’expérimentation continue.",
    "Professional experience": "Expérience professionnelle",
    "Education": "Formation",
    "Get in touch": "Entrons en contact",
    "Have a project in mind? Let's talk about how to make it real.": "Vous avez un projet en tête ? Parlons de la meilleure façon de le concrétiser.",
    "Email me": "M’envoyer un e-mail",
    "Message on Telegram": "M’écrire sur Telegram",
    "Orléans, France": "Orléans, France",
    "Name": "Nom",
    "Add a comment...": "Ajouter un commentaire...",
    "Post": "Publier",
    "Like": "J’aime",
    "Unlike": "Je n’aime plus",
    "Comment": "Commenter",
    "Save": "Enregistrer",
    "Remove from saved": "Retirer des éléments enregistrés",
    "Message on Telegram": "M’écrire sur Telegram",
    "likes": "J’aime",
    "just now": "à l’instant",
    "Guest": "Invité",
    "Couldn't load comments right now.": "Impossible de charger les commentaires pour le moment.",
    "Couldn't post your comment. Please try again.": "Impossible de publier votre commentaire. Veuillez réessayer.",
    "Check out this portfolio": "Découvrez ce portfolio",
    "Loading news...": "Chargement des actualités…",
    "Developer News Feed": "Actualités des développeurs",
    "Curated headlines from Google News. Swipe or use arrow keys.": "Une sélection de titres de Google Actualités. Faites glisser ou utilisez les flèches du clavier.",
    "Click this card to read full article.": "Cliquez sur cette carte pour lire l’article complet.",
    "SOURCE": "SOURCE",
    "News Source": "Source d’actualité",
    "Read the full article for more details.": "Lisez l’article complet pour en savoir plus.",
    "No articles for": "Aucun article pour",
    "Failed to load news.": "Échec du chargement des actualités.",
    "Server-side problem. Switching topic...": "Problème côté serveur. Changement de sujet…",
    "Rate limit exceeded. Please wait a few minutes.": "Limite de requêtes atteinte. Veuillez patienter quelques minutes.",
    "STARLINK REFERRAL": "OFFRE DE PARRAINAGE STARLINK",
    "LIMITED OFFER": "OFFRE LIMITÉE",
    "1 MONTH": "1 MOIS",
    "FREE": "OFFERT",
    "Activate Starlink through my referral link and get one month of service free.": "Activez Starlink via mon lien de parrainage et profitez d’un mois de service offert.",
    "Activate Starlink": "Activer Starlink",
    "*Offer subject to Starlink eligibility and terms.": "*Offre soumise aux conditions et critères d’éligibilité de Starlink.",
    "LOW EARTH ORBIT · 550 KM": "ORBITE TERRESTRE BASSE · 550 KM",
    "Android / Full-Stack Developer": "Développeur Android / Full-stack",
    "Orléans-based software engineer and lecturer building native Android applications end to end — from first sketch to a live listing on Google Play. Also developing full-stack web applications with React on the frontend and Spring Boot / Django / ASP.NET Core / Node.js on the backend. Six published apps so far — just the beginning. Over nineteen years of writing and teaching code.": "Ingénieur logiciel et enseignant basé à Orléans, je développe des applications Android natives de bout en bout, du premier croquis à leur publication sur Google Play. Je crée également des applications web full-stack avec React et Spring Boot, Django, ASP.NET Core ou Node.js. Six applications publiées à ce jour, et ce n’est qu’un début. Plus de dix-neuf ans de développement et d’enseignement.",
    "primary focus": "priorité principale",
    "core toolkit": "outils essentiels",
    "backend & web": "serveur et web",
    "day to day": "au quotidien",
    "Mobile": "Mobile",
    "Languages": "Langages",
    "Frameworks": "Frameworks",
    "Tooling": "Outils",
    "Utility": "Utilitaire",
    "Board Games": "Jeux de société",
    "Casual Game": "Jeu occasionnel",
    "Quiz": "Quiz",
    "Local Business": "Commerce local",
    "A lightweight recorder for quick memos, lectures and interviews, built around a clean, distraction-free list of saved recordings.": "Un enregistreur léger pour les mémos, cours et entretiens, avec une liste claire des enregistrements sans distractions.",
    "A digital level and treasure tracker for the Munchkin card game, replacing pen-and-paper scorekeeping at the table.": "Un compteur numérique de niveaux et de trésors pour le jeu de cartes Munchkin, qui remplace le suivi papier autour de la table.",
    "A fast, no-friction QR scanner that also generates custom codes for links, plain text and contact cards.": "Un lecteur QR rapide et simple qui génère aussi des codes personnalisés pour les liens, le texte et les fiches de contact.",
    "A playful, cat-themed mini game designed for quick, casual sessions and a bit of on-the-go fun.": "Un mini-jeu sur le thème des chats, conçu pour des parties rapides et amusantes en déplacement.",
    "A lighthearted quiz that puts players' gullibility to the test with a series of tricky, tongue-in-cheek questions.": "Un quiz léger qui met la crédulité des joueurs à l’épreuve avec des questions piégeuses et pleines d’ironie.",
    "A local-business app presenting services, pricing and booking details for a Kyiv-based massage studio.": "Une application pour un commerce local présentant les services, tarifs et modalités de réservation d’un studio de massage à Kyiv.",
    "An in-browser radio player with a live audio-reactive visualizer, built on the Web Audio API for real-time frequency analysis.": "Un lecteur radio dans le navigateur avec visualisation réactive au son, basé sur l’API Web Audio pour analyser les fréquences en temps réel.",
    "A bright website for an authentic Korean pickles brand in Odesa, featuring product showcases, market locations, and nationwide delivery details.": "Un site lumineux pour une marque authentique de pickles coréens à Odesa, avec présentation des produits, points de vente et livraison nationale.",
    "A minimal personal poetry blog with a clean reading experience and a simple admin CMS powered by React and Firebase.": "Un blog de poésie personnel et minimaliste, agréable à lire, avec un CMS d’administration simple basé sur React et Firebase.",
    "An interactive hand-tracking music app that turns finger gestures into notes and chords, letting you make music without a physical instrument.": "Une application musicale interactive qui transforme les gestes des doigts en notes et accords pour jouer sans instrument physique.",
    "A minimal tool for viewing and sharing public Duolingo profile statistics. Displays avatar, XP, streaks and top courses, and generates a shareable PNG card — no login required.": "Un outil minimal pour consulter et partager les statistiques publiques d’un profil Duolingo : avatar, XP, séries, cours principaux et carte PNG partageable, sans connexion.",
    "A personal interactive birthday greeting page with playful animations and a small surprise built in.": "Une page d’anniversaire interactive avec des animations ludiques et une petite surprise.",
    "A lightweight interactive page built as a personal project — a playground for small UI and animation ideas.": "Une page interactive légère, conçue comme un terrain d’expérimentation pour des idées d’interface et d’animation.",
    "A rent-vs-buy savings calculator that visualizes how money saved on rent could grow over time if invested instead.": "Un calculateur location ou achat qui montre comment les économies de loyer pourraient croître si elles étaient investies.",
    "A shrimp price radar for Silpo with email alerts when royal shrimp drop below 40 UAH per 100 g, plus shrimp facts, recipes, and a little Odesa-style humor.": "Un radar de prix des crevettes chez Silpo, avec alertes e-mail sous 40 UAH les 100 g, des faits, des recettes et une touche d’humour d’Odesa.",
    "A multilingual botanical showcase dedicated to desert roses, featuring a collection gallery, flowering atlas, and practical plant-care guidance.": "Une vitrine botanique multilingue consacrée aux roses du désert, avec galerie, atlas de floraison et conseils pratiques d’entretien.",
    "Freelance Full-Stack & Android Developer": "Développeur freelance full-stack et Android",
    "Independent": "Indépendant",
    "Technical Project Consultant": "Consultant technique de projet",
    "Provided architectural guidance, code reviews, and technical consulting for web and mobile solutions. Assisted in optimizing system performance, streamlining API design, and advising engineering teams on best software practices.": "Conseil en architecture, revues de code et accompagnement technique pour des solutions web et mobiles. Optimisation des performances, amélioration des API et recommandations de bonnes pratiques aux équipes d’ingénierie.",
    "Independent Software Engineer & R&D": "Ingénieur logiciel indépendant et R&D",
    "Building and maintaining custom developer tooling, exploratory mobile modules, and open-source utility libraries. Experimenting with modern web frameworks, algorithm optimization, and UI/UX patterns.": "Création et maintenance d’outils pour développeurs, de modules mobiles expérimentaux et de bibliothèques open source. Exploration de frameworks web modernes, optimisation d’algorithmes et modèles UI/UX.",
    "Leading Teacher Specialist": "Enseignant spécialiste principal",
    "Educating and mentoring future software engineers in C++ / C# / Python Web / Android development / Databases; OOP, algorithms, data structures, design patterns / SOLID. Developing custom proprietary educational materials, conducting student code reviews, and supervising capstone software projects using SCRUM.": "Formation et accompagnement de futurs ingénieurs logiciels en C++, C#, Python web, Android et bases de données : POO, algorithmes, structures de données, patrons de conception et SOLID. Création de supports pédagogiques, revues de code et encadrement de projets de fin d’études avec SCRUM.",
    "Master's degree, Programming": "Master en programmation",
    "Bachelor's degree, Economics": "Licence en économie",
    "Continuous Education & Professional Certifications": "Formation continue et certifications professionnelles",
    "Constantly expanding technical expertise through specialized courses, hands-on skill validations, and industry certifications in software engineering, networking, and cloud services.": "Développement continu des compétences grâce à des cours spécialisés, des validations pratiques et des certifications en génie logiciel, réseaux et services cloud.",
    "Project Brief": "Cahier des charges",
    "Platform": "Plateforme",
    "Features": "Fonctionnalités",
    "Timeline": "Calendrier",
    "Estimated budget": "Budget estimé",
    "Copy brief": "Copier le cahier des charges",
    "Copied": "Copié",
    "Reset": "Réinitialiser",
    "Send project brief": "Envoyer le cahier des charges",
    "Choose a platform": "Choisissez une plateforme",
    "Android app": "Application Android",
    "iOS app": "Application iOS",
    "Web application": "Application web",
    "Landing page": "Page d’atterrissage",
    "Standard": "Standard",
    "Rush": "Urgent",
    "Flexible": "Flexible",
    "Contact": "Contact",
    "available for freelance work": "disponible pour des missions freelance",
    "software & teaching": "développement et enseignement",
    "Published sites": "Sites publiés",
    "Live": "En ligne",
    "Forever alive": "Éternellement vivant",
    "View project": "Voir le projet",
    "View all": "Tout voir",
    "Read more": "En savoir plus",
    "Get in touch": "Me contacter",
    "Let's build something.": "Construisons quelque chose ensemble.",
    "Send me a message and I'll get back to you.": "Envoyez-moi un message et je vous répondrai.",
    "Open to freelance projects": "Disponible pour des projets freelance",
    "Years of experience": "Années d’expérience",
    "Work": "Projets",
    "Status": "Statut",
    "Project": "Projet",
    "Education & certifications": "Formation et certifications",
    "View on GitHub": "Voir sur GitHub",
    "Visit site": "Visiter le site",
    "Loading": "Chargement",
    "A toolkit built for shipping, not just prototyping.": "Une boîte à outils conçue pour livrer, pas seulement pour prototyper.",
    "Experience & education.": "Expérience et formation.",
    "Experience": "Expérience",
    "Education": "Formation",
    "Let's build your own app.": "Créons votre application.",
    "Open to freelance projects, long-term collaborations and consulting work. Based in": "Disponible pour des missions freelance, des collaborations à long terme et du conseil. Basé à",
    "Orléans, France (EET/EEST, UTC+1) — I typically reply within a business day.": "Orléans, France (CET/CEST) : je réponds généralement sous un jour ouvré.",
    "Buy me one more coffee": "Offrez-moi un autre café",
    "Back to top": "Retour en haut",
    "Built with ❤️ & React • Available for projects": "Créé avec ❤️ et React • Disponible pour vos projets",
    "Available for projects": "Disponible pour vos projets",
    "Android Native": "Android natif",
    "Backend API + Web App": "API backend + application web",
    "Core features": "Fonctionnalités principales",
    "Balanced pace, full QA cycle": "Rythme équilibré, cycle QA complet",
    "Priority slot, ~30% faster": "Prioritaire, environ 30 % plus rapide",
    "Not specified": "Non précisé",
    "Authentication": "Authentification",
    "Offline Mode": "Mode hors ligne",
    "In-App Purchases": "Achats intégrés",
    "Hardware / Sensors": "Matériel et capteurs",
    "Admin Panel": "Panneau d’administration",
    "Custom UI/UX": "Interface et expérience personnalisées",
    "Firebase Auth": "Authentification Firebase",
    "Room DB": "Base de données Room",
    "Play Billing": "Facturation Google Play",
    "Design System": "Système de design",
    "Platform:": "Plateforme :",
    "Features:": "Fonctionnalités :",
    "Timeline:": "Délais :",
    "Estimated scope:": "Périmètre estimé :",
    "Suggested stack:": "Technologies suggérées :",
    "Sent via sunmeat.dev project estimator.": "Envoyé depuis le configurateur de projet sunmeat.dev.",
    "Project Brief — sunmeat.dev": "Cahier des charges — sunmeat.dev",
    "A personal poetry blog with a minimal reading experience and a simple admin CMS for managing poems, built with React, Vite and Firebase.": "Un blog de poésie personnel et minimaliste avec un CMS simple pour gérer les poèmes, réalisé avec React, Vite et Firebase.",
    "Source code of my personal single-page portfolio website.": "Code source de mon portfolio personnel monopage.",
    "My interactive digital business card (npx sunmeat) right in your terminal": "Ma carte de visite numérique interactive (npx sunmeat), directement dans votre terminal.",
    "A dynamic, classic text-based roguelike game implemented in C++ using the Windows API to navigate a procedurally generated 40x10 maze. Control your hero to collect gold coins, evade roaming enemies that drain your health, and find the exit before it's too late.": "Un roguelike textuel classique en C++ utilisant l’API Windows et un labyrinthe 40 × 10 généré procéduralement. Récupérez les pièces d’or, évitez les ennemis qui épuisent votre santé et trouvez la sortie à temps.",
    "Practical React component examples and patterns prepared for student groups.": "Exemples pratiques de composants React et de modèles préparés pour les groupes d’étudiants.",
    "A C# console Snake game that uses Hamiltonian cycles to generate perfect, non-colliding paths across the entire board.": "Un Snake en console C# qui utilise des cycles hamiltoniens pour générer des parcours sans collision sur tout le plateau.",
    "A comprehensive collection of clean Object-Oriented Programming examples in C++: classes, inheritance, polymorphism, abstract classes and more.": "Une collection complète d’exemples de programmation orientée objet en C++ : classes, héritage, polymorphisme, classes abstraites et plus encore.",
    "Practical C++ Standard Template Library examples covering containers, iterators, algorithms, adapters and functors.": "Exemples pratiques de la bibliothèque standard C++ : conteneurs, itérateurs, algorithmes, adaptateurs et foncteurs.",
    "C++ examples demonstrating algorithmic complexity and Big O Notation.": "Exemples C++ illustrant la complexité algorithmique et la notation grand O.",
    "A learning project on ASP.NET Core MVC demonstrating the operation of the built-in Dependency Injection container.": "Projet pédagogique ASP.NET Core MVC illustrant le fonctionnement du conteneur d’injection de dépendances intégré.",
    "A learning project on ASP.NET Core Web API demonstrating authentication and authorization with Firebase Authentication and JWT tokens.": "Projet pédagogique ASP.NET Core Web API présentant l’authentification et l’autorisation avec Firebase Authentication et des jetons JWT.",
    "A learning project on ASP.NET Core Web API demonstrating unit and integration testing with xUnit, FluentAssertions, NSubstitute, and WebApplicationFactory.": "Projet pédagogique ASP.NET Core Web API sur les tests unitaires et d’intégration avec xUnit, FluentAssertions, NSubstitute et WebApplicationFactory.",
    "Designing, building, and deploying end-to-end software products. Developing native Android apps and full-stack web applications using React + Spring Boot / Django / ASP.NET Core / Node.js + Firebase / PostgreSQL / MySQL, including database setup, API integrations, and Google Play publishing.": "Conception, développement et déploiement de produits logiciels complets. Création d’applications Android natives et web full-stack avec React, Spring Boot, Django, ASP.NET Core, Node.js, Firebase, PostgreSQL et MySQL, de la base de données aux API et à la publication sur Google Play.",
    "Streamlining night-shift venue logistics, rapid floor management, and deep sanitation protocols for high-capacity hard techno events. Maintaining strict operational safety and hygiene standards, optimizing post-event cleanup workflows under tight turnaround times, and ensuring high-throughput venue readiness during peak operations.": "Coordination logistique de nuit, gestion rapide des espaces et protocoles de nettoyage approfondi pour des événements hard techno de grande capacité. Respect des normes de sécurité et d’hygiène, optimisation du nettoyage après événement et préparation rapide des lieux.",
    "React": "React",
    "Live": "En ligne",
    "Forever alive": "Toujours vivant",
    "United States flag": "Drapeau des États-Unis",
    "English": "Anglais",
    "French": "Français",
    "Choose language": "Choisir la langue",
    "Close language menu": "Fermer le menu des langues",
    "Toggle menu": "Ouvrir ou fermer le menu",
    "About": "À propos",
    "Skills": "Compétences",
    "Apps": "Applications",
    "Experience": "Expérience",
    "Education": "Formation",
    "Timeline": "Calendrier",
    "Estimated budget": "Budget estimé",
    "Copy brief": "Copier le cahier des charges",
    "Copied": "Copié",
    "Reset": "Réinitialiser",
    "Send project brief": "Envoyer le cahier des charges",
    "Choose a platform": "Choisissez une plateforme",
    "iOS app": "Application iOS",
    "Web application": "Application web",
    "Landing page": "Page d’atterrissage",
    "Standard": "Standard",
    "Rush": "Express",
    "Flexible": "Flexible",
    "The page could not be loaded.": "La page n’a pas pu être chargée.",
    "A toolkit shaped by production work, teaching, and constant experimentation.": "Des compétences façonnées par le travail en production, l’enseignement et l’expérimentation continue.",
    "A toolkit built for shipping, not just prototyping.": "Une boîte à outils conçue pour livrer, pas seulement pour prototyper.",
    "Orléans-based software engineer & lecturer. Native Android apps end-to-end (Jetpack Compose, Kotlin) + full-stack web (React, Spring Boot, .NET, Node.js). Live side projects and open for freelance collaborations.": "Ingénieur logiciel et enseignant basé à Orléans. Applications Android natives de bout en bout (Jetpack Compose, Kotlin) et développement web full-stack (React, Spring Boot, .NET, Node.js). Projets en ligne et ouvert aux collaborations freelance.",
    "A dark, terminal-inspired personal portfolio presenting software projects, Android applications, technical experience, and open-source work.": "Un portfolio personnel sombre inspiré du terminal, présentant des projets logiciels, des applications Android, une expérience technique et du travail open source.",
    "name": "nom",
    "role": "rôle",
    "base": "lieu",
    "focus": "spécialité",
    "status": "statut",
    "Orléans-based software engineer and lecturer building native Android applications end to end — ": "Ingénieur logiciel et enseignant basé à Orléans, je développe des applications Android natives de bout en bout, ",
    "from first sketch to a live listing on Google Play. ": "du premier croquis à la publication sur Google Play. ",
    "Also developing full-stack web applications with React on the frontend and Spring Boot / Django / ASP.NET Core / Node.js on the backend. ": "Je développe également des applications web full-stack avec React côté interface et Spring Boot, Django, ASP.NET Core ou Node.js côté serveur. ",
    "Six published apps so far — just the beginning. ": "Six applications publiées à ce jour, et ce n’est qu’un début. ",
    "Over nineteen years of writing and teaching code.": "Plus de dix-neuf ans de développement et d’enseignement.",
    "A C# console Snake game that uses Hamiltonian cycles to generate perfect, non-colliding paths across the entire board.": "Un jeu Snake en console C# qui utilise des cycles hamiltoniens pour générer des parcours sans collision sur tout le plateau.",
    "A comprehensive collection of clean Object-Oriented Programming examples in C++: classes, inheritance, polymorphism, abstract classes and more.": "Une collection complète d’exemples de programmation orientée objet en C++ : classes, héritage, polymorphisme, classes abstraites et plus encore.",
    "Practical C++ Standard Template Library examples covering containers, iterators, algorithms, adapters and functors.": "Exemples pratiques de la bibliothèque standard C++ : conteneurs, itérateurs, algorithmes, adaptateurs et foncteurs.",
    "C++ examples demonstrating algorithmic complexity and Big O Notation.": "Exemples C++ illustrant la complexité algorithmique et la notation grand O.",
    "Open Source / Side Projects": "Open source et projets personnels",
    "Night Shift Venue Logistics & Facility Specialist": "Spécialiste logistique et entretien de nuit",
    "The user can contact me by email or Telegram.": "Vous pouvez me contacter par e-mail ou sur Telegram.",
    "Orléans-based software engineer & lecturer.": "Ingénieur logiciel et enseignant basé à Orléans.",
    "View published sites": "Voir les sites publiés",
    "A growing collection of small sites and experiments": "Une collection grandissante de petits sites et d’expérimentations",
    "Live on Google Play right now.": "Disponibles dès maintenant sur Google Play.",
    "Six apps across utilities, casual games and local business tools": "Six applications, entre outils pratiques, jeux occasionnels et solutions pour les commerces locaux",
    "Open source & teaching material.": "Open source et ressources pédagogiques.",
    "A toolkit built for shipping, not just prototyping.": "Une boîte à outils conçue pour livrer, pas seulement pour prototyper.",
    "A toolkit shaped by production work, teaching, and constant experimentation.": "Des compétences façonnées par le travail en production, l’enseignement et l’expérimentation continue.",
    "Open to freelance projects, long-term collaborations and consulting work.": "Disponible pour des missions freelance, des collaborations à long terme et du conseil.",
    "Email me": "M’envoyer un e-mail",
    "Message on Telegram": "M’écrire sur Telegram",
    "Buy me one more coffee": "Offrez-moi un autre café",
    "Back to top": "Retour en haut",
    "Core features": "Fonctionnalités principales",
    "Project Brief — sunmeat.dev": "Cahier des charges — sunmeat.dev",
    "Sent via sunmeat.dev project estimator.": "Envoyé depuis le configurateur de projet sunmeat.dev.",
    "Select your project requirements to get an instant scope estimate.": "Sélectionnez les besoins de votre projet pour obtenir une estimation immédiate.",
    "weeks": "semaines",
    " weeks": " semaines",
    "Estimated scope:": "Périmètre estimé :",
    "Suggested stack:": "Technologies suggérées :",
    "Standard": "Standard",
    "Express": "Express",
    "Flexible": "Flexible",
    "Priority slot, ~30% faster": "Créneau prioritaire, environ 30 % plus rapide",
    "Balanced pace, full QA cycle": "Rythme équilibré, cycle QA complet",
    "© 2019-": "© 2019-",
    "Built with ❤️ & React": "Créé avec ❤️ et React",
    "available for freelance work": "disponible pour des missions freelance",
    "Years in software & teaching": "Années en développement et enseignement",
    "Practical React component examples and patterns prepared for student groups.": "Exemples pratiques de composants React et de modèles préparés pour les groupes d’étudiants.",
    "A dynamic, classic text-based roguelike game implemented in C++ using the Windows API to navigate a procedurally generated 40x10 maze. Control your hero to collect gold coins, evade roaming enemies that drain your health, and find the exit before it's too late.": "Un roguelike textuel classique en C++ utilisant l’API Windows et un labyrinthe 40 × 10 généré procéduralement. Récupérez les pièces d’or, évitez les ennemis qui épuisent votre santé et trouvez la sortie à temps.",
    "A comprehensive collection of clean Object-Oriented Programming examples in C++: classes, inheritance, polymorphism, abstract classes and more.": "Une collection complète d’exemples de programmation orientée objet en C++ : classes, héritage, polymorphisme, classes abstraites et plus encore.",
    "Practical C++ Standard Template Library examples covering containers, iterators, algorithms, adapters and functors.": "Exemples pratiques de la bibliothèque standard C++ : conteneurs, itérateurs, algorithmes, adaptateurs et foncteurs.",
    "C++ examples demonstrating algorithmic complexity and Big O Notation.": "Exemples C++ illustrant la complexité algorithmique et la notation grand O.",
    "A learning project on ASP.NET Core MVC demonstrating the operation of the built-in Dependency Injection container.": "Projet pédagogique ASP.NET Core MVC illustrant le fonctionnement du conteneur d’injection de dépendances intégré.",
    "A learning project on ASP.NET Core Web API demonstrating authentication and authorization with Firebase Authentication and JWT tokens.": "Projet pédagogique ASP.NET Core Web API présentant l’authentification et l’autorisation avec Firebase Authentication et des jetons JWT.",
    "A learning project on ASP.NET Core Web API demonstrating unit and integration testing with xUnit, FluentAssertions, NSubstitute, and WebApplicationFactory.": "Projet pédagogique ASP.NET Core Web API sur les tests unitaires et d’intégration avec xUnit, FluentAssertions, NSubstitute et WebApplicationFactory.",
    "Web Audio": "Audio Web",
    "Korean Pickles": "Pickles coréens",
    "Poetry Blog": "Blog de poésie",
    "Music Learning": "Apprentissage musical",
    "Stats Card": "Carte de statistiques",
    "Interactive": "Interactif",
    "Pet Memorial": "Mémorial animalier",
    "Calculator": "Calculateur",
    "Price Tracker": "Suivi des prix",
    "Plant Collection": "Collection botanique",
    "JavaScript Library": "Bibliothèque JavaScript",
    "My Android Apps": "Mes applications Android",
    "Designing, building, and deploying end-to-end software products. Developing native Android apps and full-stack web applications using React + Spring Boot / Django / ASP.NET Core / Node.js + Firebase / PostgreSQL / MySQL, including database setup, API integrations, and Google Play publishing.": "Conception, développement et déploiement de produits logiciels complets. Création d’applications Android natives et web full-stack avec React, Spring Boot, Django, ASP.NET Core, Node.js, Firebase, PostgreSQL et MySQL, de la base de données aux intégrations d’API et à la publication sur Google Play.",
    "Educating and mentoring future software engineers in C++ / C# / Python Web / Android development / Databases; OOP, algorithms, data structures, design patterns / SOLID. Developing custom proprietary educational materials, conducting student code reviews, and supervising capstone software projects using SCRUM.\"": "Formation et accompagnement de futurs ingénieurs logiciels en C++, C#, Python web, Android et bases de données : POO, algorithmes, structures de données, patrons de conception et SOLID. Création de supports pédagogiques, revues de code et encadrement de projets de fin d’études avec SCRUM.",
    "Select your project requirements to get an instant scope estimate.": "Sélectionnez les besoins de votre projet pour obtenir une estimation immédiate.",
    " weeks": " semaines",
    "Estimated scope:": "Périmètre estimé :",
    "Suggested stack:": "Technologies suggérées :",
    "Priority slot, ~30% faster": "Créneau prioritaire, environ 30 % plus rapide",
    "Balanced pace, full QA cycle": "Rythme équilibré, cycle QA complet",
    "Jul 2023 — Present": "Juil. 2023 — aujourd’hui",
    "May 2017 — Dec 2017": "Mai 2017 — déc. 2017",
    "Jun 2022 — Present": "Juin 2022 — aujourd’hui",
    "Sep 2007 — Present (Remote)": "Sept. 2007 — aujourd’hui (à distance)",
    "Aug 2026 — Present": "Août 2026 — aujourd’hui",
    "Ongoing": "En cours",

    "Kotlin Coroutines": "Coroutines Kotlin",
    "Kotlin Flow": "Flux Kotlin",
    "Jetpack Compose Architecture": "Architecture Jetpack Compose",
    "Adaptive Layouts": "Mises en page adaptatives",
    "Clean Architecture": "Architecture propre",
    "Modularization": "Modularisation",
    "Performance Optimization": "Optimisation des performances",
    "Memory Profiling": "Analyse de la mémoire",
    "App Startup": "Démarrage de l’application",
    "Baseline Profiles": "Profils de référence",
    "App Distribution": "Distribution d’applications",
    "AI Machine Learning": "IA et apprentissage automatique",
    "LLM Integration in Apps": "Intégration des LLM dans les applications",
    "Foldables & Large Screens": "Écrans pliables et grands écrans",
    "App Security": "Sécurité des applications",
    "Biometric Authentication": "Authentification biométrique",
    "Location & Maps": "Localisation et cartes",
    "Offline-First": "Hors ligne en priorité",
    "Screenshot Testing": "Tests par capture d’écran",
    "UI Testing": "Tests d’interface",

    "Estimate Your App Project": "Estimez votre projet d’application",
    "Choose your platform": "Choisissez votre plateforme",
    "Pick your core features": "Choisissez les fonctionnalités principales",
    "Set your timeline": "Définissez votre calendrier",
    "Estimated timeframe": "Délai estimé",
    "Recommended stack": "Technologies recommandées",
    "Step 01": "Étape 01",
    "Step 02": "Étape 02",
    "Step 03": "Étape 03",
    "Let's build your own app.": "Créons votre application.",
    "Experience & education.": "Expérience et formation.",
    "Android Native": "Android natif",
    "Backend API + Web App": "API backend et application web",
    "Authentication": "Authentification",
    "Offline Mode": "Mode hors ligne",
    "In-App Purchases": "Achats intégrés",
    "Hardware / Sensors": "Matériel et capteurs",
    "Admin Panel": "Panneau d’administration",
    "Custom UI/UX": "Interface et expérience personnalisées",
    "Send Brief to Telegram": "Envoyer le cahier des charges sur Telegram",
    "Brief copied — open chat": "Cahier des charges copié, ouvrir la discussion",
    "Copy Brief Text": "Copier le texte du cahier des charges",
    "Copied to clipboard": "Copié dans le presse-papiers",
    "Platform:": "Plateforme :",
    "Features:": "Fonctionnalités :",
    "Timeline:": "Calendrier :",
    "Not specified": "Non précisé",
    "Let's build your own app.": "Créons votre application.",
    "Open to freelance projects, long-term collaborations and consulting work.": "Disponible pour des missions freelance, des collaborations à long terme et du conseil.",
    "Based in": "Basé à",
    " — I typically reply within a business day.": " : je réponds généralement sous un jour ouvré.",
    "A curated collection of small sites and experiments — deployed independently, each one built to try out an idea, a technique, or just for fun.": "Une collection de sites et d’expérimentations déployés séparément pour explorer une idée, une technique ou simplement pour le plaisir.",
    "Read more": "En savoir plus",
    "Source": "Source",
    "News Source": "Source d’actualité",
    "No articles for": "Aucun article pour",
    "Loading news...": "Chargement des actualités…",
    "Failed to load news.": "Impossible de charger les actualités.",
    "News request timed out. Please try again.": "La requête a expiré. Veuillez réessayer.",
    "Server-side problem. Switching topic...": "Problème côté serveur. Changement de sujet…",
    "Rate limit exceeded. Please wait a few minutes.": "Limite de requêtes atteinte. Veuillez patienter quelques minutes.",
    "Click this card to read full article.": "Cliquez sur cette carte pour lire l’article complet.",
    "Developer News Feed": "Actualités des développeurs",
    "Curated headlines from Google News. Swipe or use arrow keys.": "Une sélection de titres de Google Actualités. Faites glisser ou utilisez les flèches du clavier.",
    "Let's build your own app.": "Créons votre application.",
    "Select your project requirements to get an instant scope estimate.": "Sélectionnez les besoins de votre projet pour obtenir une estimation immédiate.",
    "Choose your platform": "Choisissez votre plateforme",
    "Pick your core features": "Choisissez les fonctionnalités principales",
    "Set your timeline": "Définissez votre calendrier",
    "Estimated timeframe": "Délai estimé",
    "Recommended stack": "Technologies recommandées",
    "Step 01": "Étape 01",
    "Step 02": "Étape 02",
    "Step 03": "Étape 03",


    "Voice Recorder": "Enregistreur vocal",
    "Munchkin Level Counter": "Compteur de niveaux Munchkin",
    "QR Code Reader: Scan & Create!": "Lecteur de QR codes : scanner et créer !",
    "Gullibility Test": "Test de crédulité",
    "Massage Kyiv": "Massage Kyiv",
    "Visit": "Visiter",
    "m ago": "min",
    "h ago": "h",
    "d ago": "j",

};

const TRANSLATIONS = { fr: FR };

function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
}

export function translateString(value, language) {
    const dictionary = TRANSLATIONS[language];
    if (!dictionary) return value;
    const normalized = normalize(value);
    if (dictionary[normalized]) return dictionary[normalized];

    let translated = value;
    const entries = Object.entries(dictionary)
        .filter(([source]) => source.includes(" ") || source.length >= 6)
        .sort((a, b) => b[0].length - a[0].length);
    for (const [source, target] of entries) {
        translated = translated.split(source).join(target);
    }
    return translated;
}

function translateValue(value, language, key = "") {
    if (typeof value === "string") {
        if (["href", "src", "srcSet", "id", "className", "key", "url", "link", "date", "mono", "icon", "country"].includes(key)) return value;
        return translateString(value, language);
    }
    if (Array.isArray(value)) return value.map((item) => translateValue(item, language, key));
    if (value && typeof value === "object" && !React.isValidElement(value)) {
        const translated = {};
        for (const [childKey, childValue] of Object.entries(value)) {
            translated[childKey] = translateValue(childValue, language, childKey);
        }
        return translated;
    }
    return value;
}

function translateProps(props, language) {
    const next = {...props};
    for (const [key, value] of Object.entries(next)) {
        if (key === "children") {
            next[key] = translateNode(value, language);
        } else if (typeof value === "string" || Array.isArray(value) || (value && typeof value === "object" && !React.isValidElement(value))) {
            next[key] = translateValue(value, language, key);
        }
    }
    return next;
}

function translateNode(node, language) {
    if (typeof node === "string") return translateString(node, language);
    if (Array.isArray(node)) return node.map((child) => translateNode(child, language));
    if (!React.isValidElement(node)) return node;
    return React.cloneElement(node, translateProps(node.props, language));
}

export function withTranslation(Component) {
    function TranslatedComponent(props) {
        const {language} = useLanguage();
        const translatedProps = translateProps(props, language);
        const element = Component(translatedProps);
        return translateNode(element, language);
    }
    TranslatedComponent.displayName = "Translated(" + (Component.displayName || Component.name || "Component") + ")";
    return TranslatedComponent;
}
