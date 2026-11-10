import {useState} from "react";
import {AVATAR_URL} from "../photo-editions.js";

// The parent keys this component by edition and source. A new language starts
// with a fresh image element, so the previous edition cannot linger onscreen.
export default function PhotoDisplay({src, alt, fullscreen = false}) {
    const [useFallback, setUseFallback] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [unavailable, setUnavailable] = useState(false);
    const actualSrc = useFallback ? AVATAR_URL : src;

    const handleError = () => {
        if (!useFallback && src !== AVATAR_URL) {
            setUseFallback(true);
            setLoaded(false);
        } else {
            setUnavailable(true);
        }
    };

    return (
        <span className={"photo-display" + (fullscreen ? " photo-display--fullscreen" : "") + (loaded ? " is-loaded" : "")}>
            {!unavailable && (
                <img
                    className="photo-display__image"
                    src={actualSrc}
                    alt={alt}
                    width="512"
                    height="512"
                    loading={fullscreen ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    onError={handleError}
                />
            )}
            {!loaded && (
                <span
                    className="photo-display__placeholder"
                    aria-hidden="true"
                >{unavailable ? "◈" : ""}</span>
            )}
        </span>
    );
}
