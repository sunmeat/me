import {useCallback, useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import PhotoDisplay from "./PhotoDisplay.jsx";
import "./PhotoLightbox.css";

const LABELS = {
    en: ["View photo", "Close photo", "Previous photo", "Next photo"],
    uk: ["Перегляд фото", "Закрити фото", "Попереднє фото", "Наступне фото"],
    fr: ["Voir la photo", "Fermer la photo", "Photo précédente", "Photo suivante"],
    de: ["Foto ansehen", "Foto schließen", "Vorheriges Foto", "Nächstes Foto"],
    es: ["Ver foto", "Cerrar foto", "Foto anterior", "Foto siguiente"],
    "pt-BR": ["Ver foto", "Fechar foto", "Foto anterior", "Próxima foto"],
    ja: ["写真を表示", "写真を閉じる", "前の写真", "次の写真"],
    zh: ["查看照片", "关闭照片", "上一张", "下一张"],
    ar: ["عرض الصورة", "إغلاق الصورة", "الصورة السابقة", "الصورة التالية"],
    sa: ["चित्रं पश्यतु", "चित्रं पिधत्त", "पूर्वचित्रम्", "उत्तरचित्रम्"],
    "ko-KP": ["사진 보기", "사진 닫기", "이전 사진", "다음 사진"],
};

export function getPhotoLabels(language) {
    return LABELS[language] || LABELS.en;
}

function PhotoControlIcon({name}) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true" focusable="false">
            {name === "close"
                ? <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"/>
                : name === "previous"
                    ? <path d="M15.5 5.5 9 12l6.5 6.5"/>
                    : <path d="M8.5 5.5 15 12l-6.5 6.5"/>}
        </svg>
    );
}

export default function PhotoLightbox({source, alt, language, hasMultiple, photoIndex = 0, photoCount = 1, onPrevious, onNext, onDoubleClick, onClose}) {
    const [closing, setClosing] = useState(false);
    const [heartBurst, setHeartBurst] = useState(0);
    const closeButton = useRef(null);
    const dialog = useRef(null);
    const previousFocus = useRef(null);
    const closeTimeout = useRef(null);
    const touchStart = useRef(null);
    const labels = getPhotoLabels(language);

    const requestClose = useCallback(() => {
        if (closeTimeout.current !== null) return;
        setClosing(true);
        closeTimeout.current = window.setTimeout(onClose, 240);
    }, [onClose]);

    useEffect(() => {
        previousFocus.current = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButton.current?.focus();
        return () => {
            window.clearTimeout(closeTimeout.current);
            document.body.style.overflow = previousOverflow;
            previousFocus.current?.focus?.();
        };
    }, []);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                requestClose();
            } else if (hasMultiple && event.key === "ArrowLeft") {
                event.preventDefault();
                onPrevious();
            } else if (hasMultiple && event.key === "ArrowRight") {
                event.preventDefault();
                onNext();
            } else if (event.key === "Tab" && dialog.current) {
                const controls = [...dialog.current.querySelectorAll("button:not([disabled])")];
                if (!controls.length) return;
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [hasMultiple, onPrevious, onNext, requestClose]);

    return createPortal(
        <div
            className={"photo-lightbox" + (closing ? " is-closing" : "") + (language === "qya" ? " photo-lightbox--quenya" : "")}
            data-edition={language}
            onClick={(event) => { if (event.target === event.currentTarget) requestClose(); }}
        >
            <div
                className="photo-lightbox__dialog"
                role="dialog"
                aria-modal="true"
                aria-label={labels[0]}
                ref={dialog}
                onClick={(event) => event.stopPropagation()}
                onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null; }}
                onTouchEnd={(event) => {
                    if (!hasMultiple || touchStart.current === null) return;
                    const delta = event.changedTouches[0].clientX - touchStart.current;
                    touchStart.current = null;
                    if (Math.abs(delta) > 55) (delta < 0 ? onNext : onPrevious)();
                }}
            >
                <button className="photo-lightbox__control photo-lightbox__close" type="button"
                        ref={closeButton} onClick={requestClose} aria-label={labels[1]} title={labels[1]}>
                    <span className="photo-lightbox__control-icon"><PhotoControlIcon name="close"/></span>
                </button>
                {hasMultiple && (
                    <div className="photo-lightbox__nav" role="group" aria-label={labels[0]}>
                        <button className="photo-lightbox__control photo-lightbox__previous" type="button"
                                onClick={onPrevious} aria-label={labels[2]} title={labels[2]}>
                            <span className="photo-lightbox__control-icon"><PhotoControlIcon name="previous"/></span>
                        </button>
                        <span className="photo-lightbox__counter" aria-live="polite" aria-atomic="true">
                            <span>{String(photoIndex + 1).padStart(2, "0")}</span>
                            <span className="photo-lightbox__counter-divider" aria-hidden="true"/>
                            <span>{String(photoCount).padStart(2, "0")}</span>
                        </span>
                        <button className="photo-lightbox__control photo-lightbox__next" type="button"
                                onClick={onNext} aria-label={labels[3]} title={labels[3]}>
                            <span className="photo-lightbox__control-icon"><PhotoControlIcon name="next"/></span>
                        </button>
                    </div>
                )}
                <div
                    className="photo-lightbox__image-area"
                    onDoubleClick={() => {
                        onDoubleClick?.();
                        setHeartBurst((count) => count + 1);
                    }}
                >
                    <PhotoDisplay key={source} src={source} alt={alt} fullscreen />
                    {heartBurst > 0 && <span key={heartBurst} className="photo-lightbox__heart" aria-hidden="true">♥</span>}
                </div>
            </div>
        </div>,
        document.body
    );
}
