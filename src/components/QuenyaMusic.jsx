import {useEffect, useRef, useState} from "react";
import {useLanguage} from "../i18n.jsx";

const TRACK = "/166209528.mp3";
const POSITION_KEY = "sunmeat-quenya-music-position";

export default function QuenyaMusic() {
    const {language} = useLanguage();
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const savePosition = () => {
        const audio = audioRef.current;
        if (!audio || !Number.isFinite(audio.currentTime)) return;
        try { localStorage.setItem(POSITION_KEY, String(audio.currentTime)); } catch { /* Storage unavailable */ }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (language !== "qya") {
            if (!audio.paused) savePosition();
            audio.pause();
            setPlaying(false);
            return;
        }
        const resume = () => {
            try {
                const saved = Number(localStorage.getItem(POSITION_KEY));
                if (Number.isFinite(saved) && saved > 0 && (!Number.isFinite(audio.duration) || saved < audio.duration)) audio.currentTime = saved;
            } catch { /* Storage unavailable */ }
            audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        };
        if (audio.readyState >= 1) resume();
        else audio.addEventListener("loadedmetadata", resume, {once: true});
        return () => audio.removeEventListener("loadedmetadata", resume);
    }, [language]);

    useEffect(() => {
        const onPageHide = () => savePosition();
        window.addEventListener("pagehide", onPageHide);
        return () => window.removeEventListener("pagehide", onPageHide);
    }, []);

    const toggle = async () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (!audio.paused) {
            savePosition();
            audio.pause();
            return;
        }
        try { await audio.play(); } catch { setPlaying(false); }
    };

    return (
        <>
            <audio ref={audioRef} src={TRACK} loop preload="metadata"
                onTimeUpdate={savePosition} onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)} />
            {language === "qya" && (
                <button type="button" onClick={toggle}
                    aria-label={playing ? "Pause elven music" : "Play elven music"}
                    aria-pressed={playing}
                    title={playing ? "Pause elven music" : "Play elven music"}
                    style={{position: "fixed", right: 20, bottom: 20, zIndex: 1000, border: "1px solid currentColor", borderRadius: 999, padding: "10px 14px", background: "#151515", color: "#fff", cursor: "pointer"}}>
                    {playing ? "♫ Pause music" : "♪ Play music"}
                </button>
            )}
        </>
    );
}
