import React, { useEffect, useRef, useState } from "react";

const PLATFORMS = [
    {
        id: "android",
        label: "Android Native",
        sub: "Kotlin / Java",
        icon: "android",
        baseWeeks: 2,
        stack: ["Kotlin", "Android SDK", "Jetpack Compose"],
    },
    {
        id: "fullstack",
        label: "Full-Stack",
        sub: "Backend API + Web App",
        icon: "layers",
        baseWeeks: 3,
        stack: ["Kotlin", "Node.js", "REST API", "React"],
    },
];

const FEATURES = [
    {
        id: "auth",
        label: "Authentication",
        icon: "lock",
        weeks: { android: 1, fullstack: 1.5 },
        stack: ["Firebase Auth", "JWT"],
    },
    {
        id: "offline",
        label: "Offline Mode",
        icon: "cloud-off",
        weeks: { android: 1.5, fullstack: 2 },
        stack: ["Room DB", "SQLite"],
    },
    {
        id: "iap",
        label: "In-App Purchases",
        icon: "card",
        weeks: { android: 1, fullstack: 1 },
        stack: ["Play Billing"],
    },
    {
        id: "hardware",
        label: "Hardware / Sensors",
        icon: "cpu",
        weeks: { android: 1.5, fullstack: 1.5 },
        stack: ["CameraX", "Sensor API"],
    },
    {
        id: "admin",
        label: "Admin Panel",
        icon: "panel",
        weeks: { android: 1.5, fullstack: 2.5 },
        stack: ["React Admin"],
    },
    {
        id: "custom-ui",
        label: "Custom UI/UX",
        icon: "brush",
        weeks: { android: 1, fullstack: 1 },
        stack: ["Figma", "Design System"],
    },
];

const TIMELINES = [
    { id: "standard", label: "Standard", note: "Balanced pace, full QA cycle", multiplier: 1 },
    { id: "express", label: "Express", note: "Priority slot, ~30% faster", multiplier: 0.7 },
];

function EIcon({ name, size = 18 }) {
    const p = {
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
        case "android":
            return (
                <svg {...p}>
                    <rect x="6" y="8" width="12" height="11" rx="2" />
                    <line x1="6" y1="12" x2="18" y2="12" />
                    <line x1="9" y1="4.5" x2="10.3" y2="7" />
                    <line x1="15" y1="4.5" x2="13.7" y2="7" />
                    <line x1="4.5" y1="10" x2="4.5" y2="16" />
                    <line x1="19.5" y1="10" x2="19.5" y2="16" />
                </svg>
            );
        case "layers":
            return (
                <svg {...p}>
                    <polygon points="12 3 21 8 12 13 3 8 12 3" />
                    <polyline points="3 13 12 18 21 13" />
                    <polyline points="3 17.5 12 22 21 17.5" />
                </svg>
            );
        case "lock":
            return (
                <svg {...p}>
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
            );
        case "cloud-off":
            return (
                <svg {...p}>
                    <path d="M4 4l16 16" />
                    <path d="M9.5 7.2A5 5 0 0 1 18 10a4 4 0 0 1-.6 8H8" />
                    <path d="M6.5 9.8A4 4 0 0 0 7 17.9" />
                </svg>
            );
        case "card":
            return (
                <svg {...p}>
                    <rect x="3" y="6" width="18" height="13" rx="2" />
                    <line x1="3" y1="10.5" x2="21" y2="10.5" />
                    <line x1="6.5" y1="15" x2="10.5" y2="15" />
                </svg>
            );
        case "cpu":
            return (
                <svg {...p}>
                    <rect x="7" y="7" width="10" height="10" rx="1.5" />
                    <rect x="10" y="10" width="4" height="4" />
                    <line x1="12" y1="2.5" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="21.5" />
                    <line x1="2.5" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="21.5" y2="12" />
                </svg>
            );
        case "panel":
            return (
                <svg {...p}>
                    <rect x="3" y="4.5" width="18" height="15" rx="2" />
                    <line x1="9" y1="4.5" x2="9" y2="19.5" />
                    <line x1="5.5" y1="8" x2="6.7" y2="8" />
                    <line x1="5.5" y1="11" x2="6.7" y2="11" />
                </svg>
            );
        case "brush":
            return (
                <svg {...p}>
                    <path d="M4 20c0-3.5 1.8-5.5 4-5.5s3.5 1.5 3.5 3.3c0 1.4-1 2.2-2 2.2-.8 0-1.3-.5-1.3-1.2" />
                    <path d="M10.5 12.8L18 5.3a1.8 1.8 0 0 1 2.5 2.5l-7.5 7.5" />
                </svg>
            );
        case "clock":
            return (
                <svg {...p}>
                    <circle cx="12" cy="12" r="8.5" />
                    <polyline points="12 7.5 12 12 15.2 14" />
                </svg>
            );
        case "bolt":
            return (
                <svg {...p} fill="currentColor" stroke="none">
                    <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
                </svg>
            );
        case "telegram":
            return (
                <svg {...p}>
                    <path d="M21 4L3 11.5l6.5 2.2M21 4L15.7 20l-6.2-6.3M21 4L9.2 13.9" />
                </svg>
            );
        case "copy":
            return (
                <svg {...p}>
                    <rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2" />
                    <path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5" />
                </svg>
            );
        case "check":
            return (
                <svg {...p}>
                    <polyline points="4 12.5 9.5 18 20 5" />
                </svg>
            );
        default:
            return null;
    }
}

function round(n) {
    return Math.round(n * 10) / 10;
}

function buildEstimate(platformId, featureIds, timelineId) {
    const platform = PLATFORMS.find((p) => p.id === platformId);
    const timeline = TIMELINES.find((t) => t.id === timelineId);
    const selectedFeatures = FEATURES.filter((f) => featureIds.includes(f.id));

    const featureWeeks = selectedFeatures.reduce((sum, f) => sum + f.weeks[platformId], 0);
    const total = (platform.baseWeeks + featureWeeks) * timeline.multiplier;

    const low = Math.max(1, Math.round(total * 0.85));
    const high = Math.max(low + 1, Math.round(total * 1.15));

    const stackSet = new Set(platform.stack);
    selectedFeatures.forEach((f) => f.stack.forEach((s) => stackSet.add(s)));

    return {
        platform,
        timeline,
        selectedFeatures,
        range: `${low} - ${high} weeks`,
        weeks: round(total),
        stack: Array.from(stackSet),
    };
}

function buildBrief(estimate) {
    const featureLine = estimate.selectedFeatures.length
        ? estimate.selectedFeatures.map((f) => f.label).join(", ")
        : "Not specified";

    return [
        "Project Brief — sunmeat.shop",
        `Platform: ${estimate.platform.label} (${estimate.platform.sub})`,
        `Features: ${featureLine}`,
        `Timeline: ${estimate.timeline.label} — ${estimate.timeline.note}`,
        `Estimated scope: ${estimate.range}`,
        `Suggested stack: ${estimate.stack.join(", ")}`,
        "",
        "Sent via sunmeat.shop project estimator.",
    ].join("\n");
}

function JsonBlock({ payload }) {
    const lines = JSON.stringify(payload, null, 2).split("\n");
    return (
        <>
            {lines.map((line, i) => {
                const match = line.match(/^(\s*)"([^"]+)":\s*(.*)$/);
                if (!match) {
                    return (
                        <div className="estimator__json-line" key={i}>
                            {line}
                        </div>
                    );
                }
                const [, indent, key, rest] = match;
                return (
                    <div className="estimator__json-line" key={i}>
                        {indent}
                        <span className="estimator__json-key">"{key}"</span>: <span className="estimator__json-val">{rest}</span>
                    </div>
                );
            })}
        </>
    );
}

export default function Estimator() {
    const [platformId, setPlatformId] = useState("android");
    const [featureIds, setFeatureIds] = useState(["auth"]);
    const [timelineId, setTimelineId] = useState("standard");
    const [copiedKind, setCopiedKind] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => () => timeoutRef.current && clearTimeout(timeoutRef.current), []);

    const estimate = buildEstimate(platformId, featureIds, timelineId);
    const brief = buildBrief(estimate);

    function toggleFeature(id) {
        setFeatureIds((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
    }

    function flash(kind) {
        setCopiedKind(kind);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopiedKind(null), 1800);
    }

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(brief);
            flash("copy");
        } catch {
            flash(null);
        }
    }

    async function handleTelegram() {
        try {
            await navigator.clipboard.writeText(brief);
        } catch {}
        window.open("https://t.me/sunmeat", "_blank", "noopener,noreferrer");
        flash("telegram");
    }

    const payload = {
        platform: estimate.platform.id,
        features: featureIds,
        timeline: estimate.timeline.id,
        estimate_weeks: estimate.range,
    };

    return (
        <section className="section section--alt estimator" id="estimate">
            <div className="section__inner">
                <span className="eyebrow">$ estimate --init</span>
                <h2 className="section__title">Estimate Your App Project</h2>
                <p className="section__sub">
                    Select your project requirements to get an instant scope estimate.
                </p>

                <div className="estimator__layout">
                    <div className="estimator__steps">
                        <div className="estimator__step">
                            <div className="estimator__step-head">
                                <span className="estimator__step-num">Step 01</span>
                                <h3>Choose your platform</h3>
                            </div>
                            <div className="estimator__platforms" role="radiogroup" aria-label="Platform">
                                {PLATFORMS.map((p) => {
                                    const active = p.id === platformId;
                                    return (
                                        <button
                                            key={p.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={active}
                                            className={`platform-card ${active ? "is-active" : ""}`}
                                            onClick={() => setPlatformId(p.id)}
                                        >
                                            <div className="platform-card__icon">
                                                <EIcon name={p.icon} size={20} />
                                            </div>
                                            <div className="platform-card__body">
                                                <h4>{p.label}</h4>
                                                <span>{p.sub}</span>
                                            </div>
                                            {active && (
                                                <span className="platform-card__check">
                          <EIcon name="check" size={13} />
                        </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="estimator__step">
                            <div className="estimator__step-head">
                                <span className="estimator__step-num">Step 02</span>
                                <h3>Pick your core features</h3>
                            </div>
                            <div className="estimator__features" role="group" aria-label="Core features">
                                {FEATURES.map((f) => {
                                    const active = featureIds.includes(f.id);
                                    return (
                                        <button
                                            key={f.id}
                                            type="button"
                                            aria-pressed={active}
                                            className={`feature-chip ${active ? "is-active" : ""}`}
                                            onClick={() => toggleFeature(f.id)}
                                        >
                                            <EIcon name={f.icon} size={16} />
                                            {f.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="estimator__step">
                            <div className="estimator__step-head">
                                <span className="estimator__step-num">Step 03</span>
                                <h3>Set your timeline</h3>
                            </div>
                            <div className="estimator__timeline" role="radiogroup" aria-label="Timeline">
                                {TIMELINES.map((t) => {
                                    const active = t.id === timelineId;
                                    return (
                                        <button
                                            key={t.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={active}
                                            className={`timeline-option ${active ? "is-active" : ""}`}
                                            onClick={() => setTimelineId(t.id)}
                                        >
                      <span className="timeline-option__icon">
                        <EIcon name={t.id === "express" ? "bolt" : "clock"} size={16} />
                      </span>
                                            <span className="timeline-option__body">
                        <strong>{t.label}</strong>
                        <span>{t.note}</span>
                      </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <aside className="estimator__result">
                        <div className="estimator__result-card">
                            <span className="estimator__result-label">Estimated timeframe</span>
                            <div className="estimator__result-value">{estimate.range}</div>

                            <div className="estimator__stack">
                                <span className="estimator__result-label">Recommended stack</span>
                                <div className="estimator__stack-pills">
                                    {estimate.stack.map((s) => (
                                        <span className="tag tag--soft" key={s}>
                      {s}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="estimator__actions">
                                <button type="button" className="btn btn--primary" onClick={handleTelegram}>
                                    <EIcon name="telegram" size={16} />
                                    {copiedKind === "telegram" ? "Brief copied — open chat" : "Send Brief to Telegram"}
                                </button>
                                <button type="button" className="btn btn--ghost" onClick={handleCopy}>
                                    <EIcon name={copiedKind === "copy" ? "check" : "copy"} size={16} />
                                    {copiedKind === "copy" ? "Copied to clipboard" : "Copy Brief Text"}
                                </button>
                            </div>
                        </div>

                        <div className="terminal estimator__terminal">
                            <div className="terminal__bar">
                                <span className="terminal__dot" />
                                <span className="terminal__dot" />
                                <span className="terminal__dot" />
                                <span className="terminal__title">brief.json</span>
                            </div>
                            <div className="terminal__body estimator__json">
                                <JsonBlock payload={payload} />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}