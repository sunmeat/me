import {useLanguage, withTranslation} from "../i18n.jsx";
import React, { useState, useEffect, useRef, useCallback } from "react";

const TOPICS = [
    "Kotlin", "Kotlin Coroutines", "Kotlin Flow", "Jetpack Compose",
    "Jetpack Compose Architecture", "Material 3", "Adaptive Layouts",
    "Jetpack Navigation", "ViewModel", "Hilt / Dagger",
    "DataStore", "WorkManager", "Paging 3",
    "Clean Architecture", "MVVM", "MVI", "Modularization",
    "Kotlin Multiplatform", "Compose Multiplatform",
    "Ktor", "Spring Boot", "Firebase", "Supabase",
    "GraphQL", "REST API", "gRPC", "OAuth2 JWT",
    "Google Cloud / Firebase", "AWS Amplify", "CI/CD",
    "Gradle", "Kotlin DSL", "App Distribution", "Play Console",
    "AI Machine Learning", "ML Kit", "Gemini Nano", "TensorFlow Lite",
    "Vertex AI", "Google AI Studio", "LLM Integration in Apps",
    "Performance Optimization", "Baseline Profiles", "App Startup",
    "Memory Profiling", "Benchmarking", "Compose Compiler",
    "JUnit5", "Compose Testing", "Espresso", "MockK",
    "UI Testing", "Screenshot Testing",
    "Flutter", "React Native",
    "Wear OS", "Android TV / Auto", "Foldables & Large Screens",
    "App Security", "Biometric Authentication", "Privacy Sandbox",
    "Media3", "Location & Maps", "Offline-First"
];

const ITEMS_PER_TOPIC = 7;
const CACHE_TTL = 10 * 60 * 1000;

function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function truncateText(text, maxLen = 850) {
    if (text.length <= maxLen) return text;
    const cut = text.lastIndexOf(" ", maxLen);
    return text.slice(0, cut > 0 ? cut : maxLen) + "...";
}

function formatDate(dateStr, language = "en") {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return language === "ja" ? "たった今" : "just now";
    if (language === "qya") {
        const months = ["Narvinyë", "Nénimë", "Súlimë", "Víressë", "Lótessë", "Nárië", "Cermië", "Urimë", "Yavannië", "Narquelië", "Hísimë", "Ringarë"];
        if (mins < 60) return `${mins} min. nó`;
        if (hours < 24) return `${hours} lú nó`;
        if (days < 7) return `${days} ré nó`;
        return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    if (mins < 60) return language === "ja" ? `${mins}分前` : `${mins}m ago`;
    if (hours < 24) return language === "ja" ? `${hours}時間前` : `${hours}h ago`;
    if (days < 7) return language === "ja" ? `${days}日前` : `${days}d ago`;
    return d.toLocaleDateString(language === "fr" ? "fr-FR" : language === "ja" ? "ja-JP" : "en-US", { month: "short", day: "numeric", year: "numeric" });
}

function cleanTitle(title) {
    return title.replace(/\s*[-—]\s*.+$/, "").trim();
}

function getTopicColor(topic) {
    const hash = topic.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const colors = ["#3ddc84", "#f3b73b", "#58a6ff", "#ff7b72", "#d2a8ff", "#79c0ff", "#56d364", "#ffa657", "#7ee787", "#a5d6ff"];
    return colors[hash % colors.length];
}

function getSource(it) {
    if (it.author && it.author.trim().length > 3) return it.author.trim();

    let title = it.title || "";
    const lastDash = title.lastIndexOf(" - ");
    if (lastDash > 10) {
        const possible = title.slice(lastDash + 3).trim();
        if (possible.length > 3) return possible;
    }
    return "News Source";
}

function cleanContent(rawHtml, title) {
    let text = stripHtml(rawHtml || "");

    // Убираем повтор заголовка в начале
    const titleClean = cleanTitle(title).toLowerCase();
    if (text.toLowerCase().startsWith(titleClean)) {
        text = text.slice(titleClean.length).trim();
    }

    // Убираем источник из конца
    text = text.replace(/\s*[-—]\s*[A-Za-z0-9\s.,&|]+$/i, "").trim();

    // Убираем лишние пробелы и короткие строки
    text = text.replace(/\s+/g, " ").trim();

    return text.length > 50 ? text : "Read the full article for more details.";
}

function NewsFeed() {
    const { language } = useLanguage();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTopic, setActiveTopic] = useState("AI Machine Learning");
    const [feedError, setFeedError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const cache = useRef(new Map());
    const abortRef = useRef(null);

    const getNextTopicIndex = useCallback((current) => {
        const idx = TOPICS.indexOf(current);
        return idx >= 0 && idx < TOPICS.length - 1 ? TOPICS[idx + 1] : TOPICS[0];
    }, []);

    const isCacheValid = (entry) => entry && Date.now() - entry.timestamp < CACHE_TTL;

    const fetchNews = useCallback(async (topic) => {
        if (abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;
        let timedOut = false;
        const timeoutId = window.setTimeout(() => {
            timedOut = true;
            controller.abort();
        }, 12000);

        setLoading(true);
        setFeedError(null);

        const cacheKey = `${language}:${topic}`;
        const cached = cache.current.get(cacheKey);
        if (isCacheValid(cached)) {
            setItems(cached.items);
            setCurrentIndex(0);
            setLoading(false);
            return;
        }

        const locale = language === "fr" ? "fr-FR" : language === "ja" ? "ja-JP" : "en-US";
        const url = `/api/news?topic=${encodeURIComponent(topic)}&locale=${locale}`;

        try {
            const res = await fetch(url, { signal: controller.signal });
            if (abortRef.current !== controller) return;

            if (!res.ok) {
                if (res.status >= 500) {
                    const details = await res.json().catch(() => null);
                    throw new Error(details?.message || `News API returned HTTP ${res.status}`);
                }
                if (res.status === 429) {
                    setFeedError("Rate limit exceeded. Please wait a few minutes.");
                    if (cached?.items?.length) setItems(cached.items);
                    setLoading(false);
                    return;
                }
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            if (data.status !== "ok" || !Array.isArray(data.items)) {
                throw new Error(data.message || "Invalid news API response");
            }

            const allItems = (data.items || [])
                .map((it) => ({
                    id: it.guid || it.link,
                    title: cleanTitle(it.title),
                    link: it.link,
                    date: it.pubDate,
                    formattedDate: formatDate(it.pubDate, language),
                    topic,
                    content: truncateText(cleanContent(it.content || it.description || "", it.title)),
                    source: getSource(it),
                }))
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, ITEMS_PER_TOPIC);

            cache.current.set(cacheKey, { items: allItems, timestamp: Date.now() });
            setItems(allItems);
            setCurrentIndex(0);
        } catch (err) {
            if (abortRef.current !== controller) return;
            if (err.name === "AbortError" && !timedOut) return;
            console.error(err);
            setFeedError(timedOut ? "News request timed out. Please try again." : "Failed to load news.");
        } finally {
            window.clearTimeout(timeoutId);
            if (abortRef.current === controller) setLoading(false);
        }
    }, [language]);

    useEffect(() => {
        setCurrentIndex(0);
        fetchNews(activeTopic);
        return () => abortRef.current?.abort();
    }, [activeTopic, fetchNews]);

    const goNext = useCallback(() => {
        if (feedError) {
            setFeedError(null);
            setActiveTopic(getNextTopicIndex(activeTopic));
            return;
        }
        if (currentIndex < items.length - 1) {
            setCurrentIndex(i => i + 1);
        } else {
            setActiveTopic(getNextTopicIndex(activeTopic));
        }
    }, [feedError, currentIndex, items.length, activeTopic, getNextTopicIndex]);

    const goPrev = useCallback(() => currentIndex > 0 && setCurrentIndex(i => i - 1), [currentIndex]);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const diff = touchStart - touchEnd;
        if (diff > 50) goNext();
        else if (diff < -50) goPrev();
        setTouchStart(null);
        setTouchEnd(null);
    };

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    const currentItem = items[currentIndex] || null;

    const openArticle = () => currentItem?.link && window.open(currentItem.link, "_blank", "noopener,noreferrer");

    return (
        <section className="section section--alt" id="news">
            <div className="section__inner">
                <span className="eyebrow">$ ls news/ --fresh</span>
                <h2 className="section__title">Developer News Feed</h2>
                <p className="section__sub">Curated headlines from Google News. Swipe or use arrow keys.</p>

                <div className="news__topics-wrap">
                    <div className="news__topics">
                        {TOPICS.map(t => (
                            <button
                                key={t}
                                className={`news__topic${activeTopic === t ? " is-active" : ""}`}
                                onClick={() => setActiveTopic(t)}
                                style={activeTopic === t ? { borderColor: getTopicColor(t), color: getTopicColor(t) } : {}}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="news__gallery" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <button className="news__arrow news__arrow--prev" onClick={goPrev} disabled={currentIndex === 0}>←</button>

                    <div className="news__stage">
                        {feedError && <div className="news__empty"><p>{feedError}</p></div>}

                        {!feedError && items.length === 0 && !loading && (
                            <div className="news__empty"><p>No articles for "{activeTopic}"</p></div>
                        )}

                        {currentItem && (
                            <article className="news__card" onClick={openArticle}>
                                <div className="news__card-top">
                                    <span className="news__card-tag" style={{ color: getTopicColor(currentItem.topic) }}>
                                        {currentItem.topic}
                                    </span>
                                    <span className="news__card-date">{currentItem.formattedDate}</span>
                                </div>

                                <h3 className="news__card-title" translate="no">{currentItem.title}</h3>
                                <p className="news__card-excerpt">Click this card to read full article.</p>

                                <div className="news__card-footer">
                                    <div className="news__divider"></div>
                                    <div className="news__source">
                                        <span className="news__source-label">SOURCE</span>
                                        <span className="news__source-name" translate="no">{currentItem.source}</span>
                                    </div>
                                </div>
                            </article>
                        )}

                        {loading && <div className="news__skeleton">Loading news...</div>}
                    </div>

                    <button className="news__arrow news__arrow--next" onClick={goNext}>→</button>
                </div>

                {items.length > 0 && (
                    <div className="news__pager">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                className={`news__pager-btn ${idx === currentIndex ? "is-active" : ""}`}
                                onClick={() => setCurrentIndex(idx)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default withTranslation(NewsFeed);
