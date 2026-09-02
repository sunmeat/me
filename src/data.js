export const BIO = "Orléans-based software engineer and lecturer building native Android applications end to end — " +
    "from first sketch to a live listing on Google Play. " +
    "Also developing full-stack web applications with React on the frontend and Spring Boot / Django / ASP.NET Core / Node.js on the backend. " +
    "Six published apps so far — just the beginning. " +
    "Over nineteen years of writing and teaching code.";

export const NAV_LINKS = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "apps", label: "Apps"},
    {id: "experience", label: "Experience"},
    {id: "contact", label: "Contact"},
];

export const STATS = [
    {value: "5+", label: "Published Android apps"},
    {value: "18+", label: "Years in software & teaching"},
    {value: "222+", label: "GitHub repositories"},
    {value: "3.7k", label: "GitHub stars"},
];

export const SKILL_GROUPS = [
    {
        title: "Mobile",
        note: "primary focus",
        items: ["Jetpack Compose", "Flutter", ".NET MAUI", "ML Kit / MediaPipe", "Material Design", "React Native", "Room", "Clean Architecture", "MVI / MVVM"],
    },
    {
        title: "Languages",
        note: "core toolkit",
        items: ["C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL", "PHP", "Kotlin"],
    },
    {
        title: "Frameworks",
        note: "backend & web",
        items: ["ASP.NET Core", "Blazor", "Spring Boot", "Django", "Node.js", "React", "Electron.js", "FastAPI"],
    },
    {
        title: "Tooling",
        note: "day to day",
        items: ["Git & GitHub", "Docker", "PostgreSQL", "REST APIs", "CI/CD", "Figma", "GraphQL / gRPC", "AI Ecosystem"],
    },
];

export const APPS = [
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

export const REPOS = [
    {
        name: "poetry-blog",
        desc: "A personal poetry blog with a minimal reading experience and a simple admin CMS for managing poems, built with React, Vite and Firebase.",
        lang: "React"
    },
    {
        name: "me",
        desc: "Source code of my personal single-page portfolio website.",
        lang: "JavaScript"
    },
    {
        name: "card",
        desc: "My interactive digital business card (npx sunmeat) right in your terminal",
        lang: "JavaScript Library"
    },
    {
        name: "maze",
        desc: "A dynamic, classic text-based roguelike game implemented in C++ using the Windows API to navigate a procedurally generated 40x10 maze. Control your hero to collect gold coins, evade roaming enemies that drain your health, and find the exit before it's too late.",
        lang: "C++"
    },
    {
        name: "react_samples",
        desc: "Practical React component examples and patterns prepared for student groups.",
        lang: "React"
    },
    {
        name: "HamiltonianSnake",
        desc: "A C# console Snake game that uses Hamiltonian cycles to generate perfect, non-colliding paths across the entire board.",
        lang: "C#"
    },
    {
        name: "oop",
        desc: "A comprehensive collection of clean Object-Oriented Programming examples in C++: classes, inheritance, polymorphism, abstract classes and more.",
        lang: "C++"
    },
    {
        name: "STL",
        desc: "Practical C++ Standard Template Library examples covering containers, iterators, algorithms, adapters and functors.",
        lang: "C++"
    },
    {
        name: "O-Notation",
        desc: "C++ examples demonstrating algorithmic complexity and Big O Notation.",
        lang: "C++"
    },
    {
        name: "aspnetcore_services",
        desc: "A learning project on ASP.NET Core MVC demonstrating the operation of the built-in Dependency Injection container.",
        lang: "C#"
    }
];

export const SITES = [
    {
        id: "pisanina",
        name: "Pisanina",
        url: "https://pisanina.vercel.app/",
        domain: "pisanina.vercel.app",
        mono: "SP",
        tag: "Poetry Blog",
        status: "live",
        desc: "A minimal personal poetry blog with a clean reading experience and a simple admin CMS powered by React and Firebase.",
    },
    {
        id: "duo-stats",
        name: "Duo Stats",
        url: "https://duostat.vercel.app/",
        domain: "duostat.vercel.app",
        mono: "DS",
        tag: "Stats Card",
        status: "live",
        desc: "A minimal tool for viewing and sharing public Duolingo profile statistics. Displays avatar, XP, streaks and top courses, and generates a shareable PNG card — no login required.",
    },
    {
        id: "alex-fm",
        name: "Alex FM",
        url: "https://alexfm.vercel.app/",
        domain: "alexfm.vercel.app",
        mono: "FM",
        tag: "Web Audio",
        status: "live",
        desc: "An in-browser radio player with a live audio-reactive visualizer, built on the Web Audio API for real-time frequency analysis.",
    },
    {
        id: "happy-lena",
        name: "Happy Lena",
        url: "https://happy-lena.netlify.app/",
        domain: "happy-lena.netlify.app",
        mono: "HB",
        tag: "Interactive",
        status: "live",
        desc: "A personal interactive birthday greeting page with playful animations and a small surprise built in.",
    },
    {
        id: "freechka",
        name: "Freya",
        url: "https://freechka.vercel.app/",
        domain: "freechka.vercel.app",
        mono: "FR",
        tag: "Pet Memorial",
        status: "Forever alive",
        desc: "A lightweight interactive page built as a personal project — a playground for small UI and animation ideas.",
    },
    {
        id: "no-rent",
        name: "No Rent",
        url: "https://no-rent.vercel.app/",
        domain: "no-rent.vercel.app",
        mono: "NR",
        tag: "Calculator",
        status: "live",
        desc: "A rent-vs-buy savings calculator that visualizes how money saved on rent could grow over time if invested instead.",
    },
];

export const EXPERIENCE = [
    {
        role: "Freelance Full-Stack & Android Developer",
        org: "Independent",
        time: "Jul 2023 — Present",
        desc:
            "Designing, building, and deploying end-to-end software products. Developing native Android apps and full-stack web applications using React + Spring Boot / Django / ASP.NET Core / Node.js + Firebase / PostgreSQL / MySQL, including database setup, API integrations, and Google Play publishing."
    },
    {
        role: "Technical Project Consultant",
        org: "GastroLab",
        time: "May 2017 — Dec 2017",
        desc:
            "Provided architectural guidance, code reviews, and technical consulting for web and mobile solutions. Assisted in optimizing system performance, streamlining API design, and advising engineering teams on best software practices."
    },
    {
        role: "Independent Software Engineer & R&D",
        org: "Open Source / Side Projects",
        time: "Jun 2022 — Present",
        desc:
            "Building and maintaining custom developer tooling, exploratory mobile modules, and open-source utility libraries. Experimenting with modern web frameworks, algorithm optimization, and UI/UX patterns."
    },
    {
        role: "Leading Teacher Specialist",
        org: "IT Step Academy, Odesa",
        time: "Sep 2007 — Present (Remote)",
        desc:
            "Educating and mentoring future software engineers in C++ / C# / Python Web / Android development / Databases; OOP, algorithms, data structures, design patterns / SOLID. Developing custom proprietary educational materials, conducting student code reviews, and supervising capstone software projects using SCRUM.\""
    },
    {
        role: "Night Shift Venue Logistics & Facility Specialist",
        org: "ASTRA Club, Orléans",
        time: "Aug 2026 — Present",
        desc:
            "Streamlining night-shift venue logistics, rapid floor management, and deep sanitation protocols for high-capacity hard techno events. Maintaining strict operational safety and hygiene standards, optimizing post-event cleanup workflows under tight turnaround times, and ensuring high-throughput venue readiness during peak operations."
    }
];

export const EDUCATION = [
    {
        role: "Master's degree, Programming",
        org: "IT Academy Step, Odesa",
        time: "2005 — 2010",
    },
    {
        role: "Bachelor's degree, Economics",
        org: "Open International University of Human Development “Ukraine”, Mykolaiv",
        time: "2005 — 2010",
    },
    {
        role: "Continuous Education & Professional Certifications",
        org: "Cisco, Microsoft, Google Play Academy, IBM, Prometheus, ITVDN, HackerRank, etc.",
        time: "Ongoing",
        desc: "Constantly expanding technical expertise through specialized courses, hands-on skill validations, and industry certifications in software engineering, networking, and cloud services.",
    },
];

export const COFFEE_URL = "https://send.monobank.ua/2YRyvEGWAn";

export const SOCIALS = [
    {label: "Telegram", href: "https://t.me/sunmeat", icon: "telegram"},
    {label: "GitHub", href: "https://github.com/sunmeat", icon: "github"},
    {label: "LinkedIn", href: "https://www.linkedin.com/in/sunmeat/", icon: "linkedin"},
    {label: "Microsoft Learn", href: "https://learn.microsoft.com/en-us/users/sunmeat/achievements", icon: "microsoft"},
    {label: "Google Developer", href: "https://g.dev/sunmeat", icon: "google"},
    {label: "HackerRank", href: "https://www.hackerrank.com/sunmeat", icon: "code"},
    {label: "Credly", href: "https://www.credly.com/users/sunmeat/badges/credly", icon: "credly"},
    {label: "Duolingo", href: "https://duolingo.com/profile/taemnus", icon: "duolingo"},
    {label: "Linktree", href: "https://linktr.ee/sunmeat", icon: "linktree"},
    {label: "My Android Apps", href: "https://play.google.com/store/apps/developer?id=sunmeat", icon: "star"},
];

export const TERMINAL_LINES = [
    {k: "name", v: "Oleksandr Zahoruiko"},
    {k: "role", v: "Android / Full-Stack Developer"},
    {k: "base", v: "Orléans, France"},
    {k: "focus", v: "Kotlin \u00B7 Java \u00B7 React \u00B7 Node.js"},
    {k: "status", v: "available for freelance work"},
];