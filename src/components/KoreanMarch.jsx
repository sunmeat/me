import {useEffect, useRef, useState} from "react";
import {useLanguage} from "../i18n.jsx";

const TRACK = "/1666401420.mp3";

export default function KoreanMarch() {
    const {language} = useLanguage();
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (language !== "ko-KP") {
            audio.pause();
            audio.currentTime = 0;
            setPlaying(false);
            return;
        }
        // Browsers may block audible autoplay until the first user gesture.
        audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }, [language]);

    const toggle = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (!audio.paused) {
            audio.pause();
            setPlaying(false);
            return;
        }
        try {
            await audio.play();
            setPlaying(true);
        } catch {
            setPlaying(false);
        }
    };

    return (
        <>
            <audio ref={audioRef} src={TRACK} loop preload="none" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} />
            {language === "ko-KP" && (
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={playing ? "음악 끄기" : "음악 켜기"}
                    aria-pressed={playing}
                    title={playing ? "음악 끄기" : "음악 켜기"}
                    style={{position: "fixed", right: 20, bottom: 20, zIndex: 1000, border: "1px solid currentColor", borderRadius: 999, padding: "10px 14px", background: "#151515", color: "#fff", cursor: "pointer"}}
                >
                    {playing ? "♫ 음악 끄기" : "♪ 음악 켜기"}
                </button>
            )}
        </>
    );
}
