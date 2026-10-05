import {useEffect, useRef, useState} from "react";

import {
    TERMINAL_LINES
} from "../data.js";

function Terminal() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.4}
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`terminal ${started ? "is-running" : ""}`} ref={ref}>
            <div className="terminal__bar">
                <span className="terminal__dot"/>
                <span className="terminal__dot"/>
                <span className="terminal__dot"/>
                <span className="terminal__title">zsh — sunmeat</span>
            </div>
            <div className="terminal__body">
                <div className="terminal__row">
                    <span className="terminal__prompt">$</span> npx sunmeat
                </div>
                {TERMINAL_LINES.map((line, i) => (
                    <div
                        className="terminal__row terminal__row--out"
                        key={line.k}
                        style={{animationDelay: `${0.35 + i * 0.16}s`}}
                    >
                        <span className="terminal__key">{line.k}:</span> {line.v}
                    </div>
                ))}
                <div className="terminal__row terminal__row--out" style={{animationDelay: "1.25s"}}>
                    <span className="terminal__prompt">$</span>
                    <span className="terminal__cursor"/>
                </div>
            </div>
        </div>
    );
}

export default Terminal;