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

export default function PhotoLightbox({source, alt, language, hasMultiple, onPrevious, onNext, onClose}) {
    const [closing, setClosing] = useState(false);
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
                <button className="photo-lightbox__close" type="button" ref={closeButton} onClick={requestClose} aria-label={labels[1]} title={labels[1]}>×</button>
                {hasMultiple && (
                    <button className="photo-lightbox__previous" type="button" onClick={onPrevious} aria-label={labels[2]} title={labels[2]}>‹</button>
                )}
                <div className="photo-lightbox__image-area">
                    <PhotoDisplay key={source} src={source} alt={alt} fullscreen />
                </div>
                {hasMultiple && (
                    <button className="photo-lightbox__next" type="button" onClick={onNext} aria-label={labels[3]} title={labels[3]}>›</button>
                )}
            </div>
        </div>,
        document.body
    );
}
