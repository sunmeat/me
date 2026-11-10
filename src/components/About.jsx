import {useLanguage, withTranslation} from "../i18n.jsx";
import { useState, useRef, useEffect } from "react";
import {
    collection,
    addDoc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.js";
import Icon from "./Icon.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { QuenyaRelicCrest, QuenyaPhotoFiligree } from "./QuenyaRelicOrnaments.jsx";
import { AVATAR_URL, getEditionPhotos, getEditionPhotoUrl, nextPhotoIndex } from "../photo-editions.js";
import PhotoDisplay from "./PhotoDisplay.jsx";
import PhotoLightbox, { getPhotoLabels } from "./PhotoLightbox.jsx";

const USERNAME = "sunmeat";
const BASE_LIKES = 228;
const TELEGRAM_URL = "https://t.me/sunmeat";
 
// The label, caption and flag describe the photo shown in this edition,
// not necessarily the author's permanent place of residence.
const PHOTO_EDITION = {
    en: {
        location: "New York, USA",
        caption: "A New York frame, a head full of ideas. Great projects begin with curiosity. 🗽",
        flag: "us",
        country: "United States",
    },
    uk: {
        location: "Одеса, Україна",
        caption: "Між морем і рядками коду. Одеса завжди нагадує, заради чого варто творити. 🌊",
        flag: "ua",
        country: "Україна",
    },
    fr: {
        location: "Orléans, France",
        caption: "Un instant entre deux projets, des idées plein la tête. ✨",
        flag: "fr",
        country: "France",
    },
    es: {
        location: "España",
        caption: "Entre acordes y arena, un matador cambia la espada por una guitarra. Algunas historias se cuentan mejor con música. 🎸✨",
        flag: "es",
        country: "España",
    },
    "pt-BR": {
        location: "Rio de Janeiro, Brasil",
        caption: "Sol, mar e o Cristo Redentor lá no alto. No Rio, até a criatividade entra no ritmo da cidade. ☀️🌴",
        flag: "br",
        country: "Brasil",
    },
    de: {
        location: "Deutschland",
        caption: "Ein neuer Blickwinkel, ein neuer Gedanke. Manchmal beginnt die spannendste Geschichte mit einem einzigen Bild. ✨",
        flag: "de",
        country: "Deutschland",
    },
    ja: {
        location: "東京、日本",
        caption: "雨の東京、ネオンに浮かぶ侍。未来は、まだ書かれていない。🌧️⚡",
        flag: "jp",
        country: "日本",
    },
    zh: {
        location: "中国·长城",
        caption: "杜罗夫，墙我给你修回来了！还请来一只小老虎当监工。🐯🧱",
        flag: "cn",
        country: "中国",
    },
    ar: {
        location: "دبي، الإمارات العربية المتحدة",
        caption: "من شرفة تطل على دبي، تبدو أضواء المدينة كأنها شيفرة تكتب حكاية جديدة كل ليلة. 🌃✨",
        flag: "ae",
        country: "الإمارات العربية المتحدة",
    },
    sa: {
        location: "बेङ्गलूरु, भारतम्",
        caption: "तन्त्रज्ञानस्य परम्परायाश्च सुन्दरः सङ्गमः। कूटलेखनं मम साधना। 🪷💻",
        flag: "in",
        country: "भारतम्",
    },
    hv: {
        location: "Sōdrurlion, Vesteros",
        caption: "Sōnar amāzis. ❄️",
        flag: null,
        country: null,
    },
    "ko-KP": {
        location: "평양, 조선민주주의인민공화국",
        caption: "새로운 구상과 창조의 길은 계속됩니다. ✨",
        flag: "kp",
        country: "조선민주주의인민공화국",
    },
    qya: {
        location: "Imladris, Endórë",
        caption: "Elen síla lúmenn’ omentielvo ✧",
        flag: null,
        country: null,
    },
};

const SANSKRIT_PHOTO_EDITION = [
    PHOTO_EDITION.sa,
    {
        location: "बेङ्गलूरु, भारतम्",
        caption: "नूतनं कूटलेखनं प्राचीना च परम्परा। बेङ्गलूरुनगरे उभयोः सङ्गमः। 💻✨",
        flag: "in",
        country: "भारतम्",
    },
];

// Separate Firestore collection just for this card — does not touch
// the existing "poems" / "comments" collections used elsewhere.
const COMMENTS_COLLECTION = "about_comments";
const GUEST_NAME_STORAGE_KEY = "about-card-guest-name";

function dateLocale(language) {
    return language === "fr" ? "fr-FR" : language === "av" ? "ru-RU" : language === "ja" ? "ja-JP" : "en-US";
}

const QUENYA_MONTHS = ["Narvinyë", "Nénimë", "Súlimë", "Víressë", "Lótessë", "Nárië", "Cermië", "Urimë", "Yavannië", "Narquelië", "Hísimë", "Ringarë"];

function pad2(n) {
    return String(n).padStart(2, "0");
}

function formatTimestamp(date, language = "en") {
    if (language === "qya") {
        return `${QUENYA_MONTHS[date.getMonth()]} ${date.getDate()}, ${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
    }
    const formatted = date.toLocaleString(dateLocale(language), {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    return formatted.replace(" at ", ", ");
}

function formatRelative(date, language = "en") {
    if (!date) return "";
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return "just now";
    if (language === "av") {
        if (mins < 60) return `${mins} мин.`;
        if (hours < 24) return `${hours} ч`;
        if (days < 7) return `${days} дн.`;
    }
    if (language === "qya") {
        if (mins < 60) return `${mins} min.`;
        if (hours < 24) return `${hours} lú`;
        if (days < 7) return `${days} ré`;
        return `${QUENYA_MONTHS[date.getMonth()]} ${date.getDate()}`;
    }
    if (mins < 60) return `${mins}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    return date.toLocaleDateString(dateLocale(language), { month: "short", day: "numeric" });
}

function loadStoredGuestName() {
    try {
        return localStorage.getItem(GUEST_NAME_STORAGE_KEY) || "";
    } catch {
        return "";
    }
}

function About() {
    const { language } = useLanguage();
    const isNorthKorean = language === "ko-KP";
    const isQuenya = language === "qya";
    // Ordered Indian gallery, starting at the first image on each visit.
    const [sequence, setSequence] = useState({ language: "", index: 0 });
    const [photoOpen, setPhotoOpen] = useState(false);
    const photoIndex = sequence.language === language ? sequence.index : 0;
    const photoUrl = getEditionPhotoUrl(language, photoIndex);
    const photoEdition = language === "sa" ? SANSKRIT_PHOTO_EDITION[photoIndex] : (PHOTO_EDITION[language] || PHOTO_EDITION.en);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(BASE_LIKES);
    const [burstKey, setBurstKey] = useState(0);
    const [showBurst, setShowBurst] = useState(false);
    const [saved, setSaved] = useState(false);
    const [guestName, setGuestName] = useState(loadStoredGuestName);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [commentsError, setCommentsError] = useState(null);
    const [posting, setPosting] = useState(false);
    const [timestamp, setTimestamp] = useState(() => formatTimestamp(new Date(), language));
    const burstTimeout = useRef(null);

    // Reset immediately when changing editions; don't reuse the previous photo.
    useEffect(() => {
        setSequence({ language, index: 0 });
        setPhotoOpen(false);
    }, [language]);

    // In the Indian edition show photo 1, then 2, then 1 again.
    // Pause while the fullscreen viewer is open so visitors can browse manually.
    useEffect(() => {
        if (language !== "sa" || photoOpen) return undefined;
        const timer = window.setInterval(() => {
            setSequence((previous) => ({
                language: "sa",
                index: nextPhotoIndex(previous.language === "sa" ? previous.index : 0, getEditionPhotos("sa").length),
            }));
        }, 8500);
        return () => window.clearInterval(timer);
    }, [language, photoOpen]);

    const stepPhoto = (direction) => {
        if (language !== "sa") return;
        setSequence((previous) => {
            const count = getEditionPhotos("sa").length;
            const current = previous.language === "sa" ? previous.index : 0;
            return { language: "sa", index: (current + direction + count) % count };
        });
    };

    // Live-sync real comments from Firebase — every visitor sees the same feed.
    useEffect(() => {
        const q = query(collection(db, COMMENTS_COLLECTION), orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                setCommentsError(null);
                setComments(
                    snapshot.docs.map((doc) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            name: data.name || "Guest",
                            text: data.text || "",
                            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : null,
                        };
                    })
                );
            },
            (err) => {
                console.error("Failed to load comments:", err);
                setCommentsError("Couldn't load comments right now.");
            }
        );
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem(GUEST_NAME_STORAGE_KEY, guestName);
        } catch {
            /* localStorage unavailable — ignore */
        }
    }, [guestName]);

    useEffect(() => {
        const id = setInterval(() => {
            setTimestamp(formatTimestamp(new Date(), language));
        }, 60000);
        return () => clearInterval(id);
    }, [language]);

    const toggleLike = () => {
        setLiked((prev) => {
            const next = !prev;
            setLikeCount((count) => (next ? count + 1 : count - 1));
            return next;
        });
    };

    const triggerBurst = () => {
        setShowBurst(true);
        setBurstKey((k) => k + 1);
        clearTimeout(burstTimeout.current);
        burstTimeout.current = setTimeout(() => setShowBurst(false), 700);
    };

    const handleDoubleClick = () => {
        if (!liked) {
            setLiked(true);
            setLikeCount((count) => count + 1);
        }
        triggerBurst();
    };

    const handleBookmarkClick = async () => {
        setSaved((prev) => !prev);
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Oleksandr Zahoruiko",
                    text: "Check out this portfolio",
                    url: window.location.href,
                });
            } catch {
                /* share cancelled or unavailable — ignore */
            }
        }
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const text = commentText.trim();
        if (!text || posting) return;

        setPosting(true);
        setCommentsError(null);
        try {
            await addDoc(collection(db, COMMENTS_COLLECTION), {
                name: guestName.trim() || "Guest",
                text,
                createdAt: serverTimestamp(),
            });
            setCommentText("");
        } catch (err) {
            console.error("Failed to post comment:", err);
            setCommentsError("Couldn't post your comment. Please try again.");
        } finally {
            setPosting(false);
        }
    };

    return (
        <section className="section" id="about">
            <div className="section__inner about">
                <div className="about__media">
                    <div className={isQuenya ? "about-card about-card--quenya" : "about-card"}>
                        {isQuenya && <QuenyaRelicCrest />}
                        <div className="about-card__header">
                            <div className="about-card__avatar">
                                <img src={AVATAR_URL} alt="Oleksandr Zahoruiko" width="512" height="512" loading="lazy" decoding="async" onError={(event) => { const img = event.currentTarget; if (!img.src.endsWith("/s.jpg")) img.src = "/s.jpg"; else img.style.visibility = "hidden"; }} />
                            </div>
                            <div className="about-card__meta">
                                <span className="about-card__username">{USERNAME}</span>
                                <span className="about-card__location-tag">
                                    <Icon name="pin" size={11} />
                                    <span translate="no">{photoEdition.location}</span>
                                </span>
                            </div>
                        </div>

                        <div className="about-card__photo-wrap">
                            <button
                                type="button"
                                className="about-card__photo-trigger"
                                onClick={() => setPhotoOpen(true)}
                                aria-label={getPhotoLabels(language)[0]}
                            >
                                <div className="about__frame">
                                    <PhotoDisplay key={language + ":" + photoUrl} src={photoUrl} alt="Oleksandr Zahoruiko" />
                                </div>
                                <span className="about-card__photo-zoom" aria-hidden="true"><Icon name="maximize" size={18} /></span>
                            </button>
                            {isQuenya && <QuenyaPhotoFiligree />}
                            <div key={burstKey} className={`about-card__burst${showBurst ? " is-active" : ""}`}>
                                <Icon name="heart" size={72} />
                            </div>
                        </div>

                        <div className="about-card__actions">
                            <button
                                type="button"
                                className={`about-card__like${liked ? " is-liked" : ""}`}
                                onClick={toggleLike}
                                aria-pressed={liked}
                                aria-label={liked ? "Unlike" : "Like"}
                            >
                                <Icon name="heart" size={22} />
                            </button>
                            <a href="#about-comment" className="about-card__action" aria-label="Comment">
                                <Icon name="message-circle" size={22} />
                            </a>
                            <a
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about-card__action"
                                aria-label="Message on Telegram"
                            >
                                <Icon name="send" size={22} />
                            </a>
                            <button
                                type="button"
                                className={`about-card__bookmark${saved ? " is-saved" : ""}`}
                                onClick={handleBookmarkClick}
                                aria-pressed={saved}
                                aria-label={saved ? "Remove from saved" : "Save"}
                            >
                                <Icon name="bookmark" size={22} />
                            </button>
                        </div>

                        <div className="about-card__likes">{likeCount.toLocaleString()}{" "}likes</div>

                        <div className="about-card__caption">
                            <span className="about-card__username">{USERNAME}</span>
                            <span translate="no">{photoEdition.caption}</span>{" "}
                            {photoEdition.flag && (
                                <img
                                    src={`https://flagcdn.com/16x12/${photoEdition.flag}.png`}
                                    srcSet={`https://flagcdn.com/32x24/${photoEdition.flag}.png 2x`}
                                    width="16"
                                    height="12"
                                    alt={photoEdition.country}
                                    className="about-card__flag"
                                />
                            )}{" "}
                            <span translate="no">{photoEdition.location}</span>
                        </div>

                        {comments.length > 0 && (
                            <div className="about-card__comments-list">
                                {comments.map((c) => (
                                    <div className="about-card__comment-item" key={c.id}>
                                        <strong translate="no">{c.name}</strong>
                                        <span translate="no">{c.text}</span>
                                        {c.createdAt && (
                                            <span className="about-card__comment-time">
                                                {formatRelative(c.createdAt, language)}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {commentsError && (
                            <div className="about-card__comment-error">{commentsError}</div>
                        )}

                        <span className="about-card__timestamp">{timestamp}</span>

                        <form
                            id="about-comment"
                            className="about-card__comment"
                            onSubmit={handleCommentSubmit}
                        >
                            <input
                                type="text"
                                className="about-card__comment-name"
                                placeholder="Name"
                                maxLength={40}
                                value={guestName}
                                onChange={(e) => setGuestName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                maxLength={500}
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button type="submit" disabled={!commentText.trim() || posting}>
                                {posting ? "..." : "Post"}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="about__copy">
                    <Eyebrow>$ cat about.md</Eyebrow>
                    <h2 className="section__title">Engineer by trade, teacher by habit.</h2>
                    <p>
                        I'm a software engineer and university lecturer based in Orléans, France, with a
                        background in both programming and economics. For close to two decades I've split my
                        time between the classroom and the codebase — teaching the next generation of
                        developers by day, and shipping production software by night.
                    </p>
                    <p>
                        Today my primary focus is native Android development, building polished, production-ready apps
                        from idea to Google Play. Alongside Android, I develop full-stack web applications with React
                        on the frontend and Spring Boot / Django / ASP.Net Core / Node.js on the backend. Whether it's mobile or web,
                        I value clean architecture, maintainable code, realistic timelines, and software that's just as
                        easy to understand a year later as it is on day one — principles I've refined through more than
                        nineteen years of writing and teaching code.
                    </p>
                    <p>
                        Outside of work, I'm a keen photographer and a multi-instrumentalist, which is
                        probably why I notice when an interface is a half-beat out of rhythm.
                    </p>
                </div>
            </div>
            {photoOpen && (
                <PhotoLightbox
                    source={photoUrl}
                    alt="Oleksandr Zahoruiko"
                    language={language}
                    hasMultiple={language === "sa"}
                    photoIndex={photoIndex}
                    photoCount={getEditionPhotos(language).length}
                    onPrevious={() => stepPhoto(-1)}
                    onNext={() => stepPhoto(1)}
                    onDoubleClick={handleDoubleClick}
                    onClose={() => setPhotoOpen(false)}
                />
            )}
        </section>
    );
}

export default withTranslation(About);