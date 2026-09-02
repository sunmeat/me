import { useState, useRef, useEffect } from "react";
import Icon from "./Icon.jsx";
import Eyebrow from "./Eyebrow.jsx";

const AVATAR_URL = "https://github.com/sunmeat/storage/blob/main/images/jpg/square-crop.jpg?raw=true";
const USERNAME = "sunmeat";
const BASE_LIKES = 228;
const TELEGRAM_URL = "https://t.me/sunmeat";
const COMMENTS_STORAGE_KEY = "about-card-comments";

function loadStoredComments() {
    try {
        const stored = localStorage.getItem(COMMENTS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

function formatTimestamp(date) {
    const formatted = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    return formatted.replace(" at ", ", ");
}

function About() {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(BASE_LIKES);
    const [burstKey, setBurstKey] = useState(0);
    const [showBurst, setShowBurst] = useState(false);
    const [saved, setSaved] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(loadStoredComments);
    const [timestamp, setTimestamp] = useState(() => formatTimestamp(new Date()));
    const burstTimeout = useRef(null);

    useEffect(() => {
        try {
            localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
        } catch {
            /* localStorage unavailable — ignore */
        }
    }, [comments]);

    useEffect(() => {
        const id = setInterval(() => {
            setTimestamp(formatTimestamp(new Date()));
        }, 60000);
        return () => clearInterval(id);
    }, []);

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

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const text = commentText.trim();
        if (!text) return;
        setComments((prev) => [...prev, text]);
        setCommentText("");
    };

    return (
        <section className="section" id="about">
            <div className="section__inner about">
                <div className="about__media">
                    <div className="about-card">
                        <div className="about-card__header">
                            <div className="about-card__avatar">
                                <img src={AVATAR_URL} alt="Oleksandr Zahoruiko" />
                            </div>
                            <div className="about-card__meta">
                                <span className="about-card__username">{USERNAME}</span>
                                <span className="about-card__location-tag">
                                    <Icon name="pin" size={11} />
                                    Orléans, France
                                </span>
                            </div>
                        </div>

                        <div className="about-card__photo-wrap" onDoubleClick={handleDoubleClick}>
                            <div className="about__frame">
                                <img
                                    src={AVATAR_URL}
                                    alt="Oleksandr Zahoruiko"
                                    className="about__photo"
                                    loading="lazy"
                                />
                            </div>
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

                        <div className="about-card__likes">{likeCount.toLocaleString()} likes</div>

                        <div className="about-card__caption">
                            <span className="about-card__username">{USERNAME}</span>
                            bonjour, epta 🇫🇷️ Orléans, France
                        </div>

                        {comments.length > 0 && (
                            <div className="about-card__comments-list">
                                {comments.map((text, i) => (
                                    <div className="about-card__comment-item" key={i}>
                                        <strong>{USERNAME}</strong>
                                        {text}
                                    </div>
                                ))}
                            </div>
                        )}

                        <span className="about-card__timestamp">{timestamp}</span>

                        <form
                            id="about-comment"
                            className="about-card__comment"
                            onSubmit={handleCommentSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button type="submit" disabled={!commentText.trim()}>
                                Post
                            </button>
                        </form>
                    </div>

                    <div className="about__location">
                        <Icon name="pin" size={15} />
                        Orléans, France
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
        </section>
    );
}

export default About;