import {useLanguage, withTranslation} from "../i18n.jsx";
import {useEffect, useRef, useState} from "react";
import {TERMINAL_LINES} from "../data.js";

function Terminal() {
    const {language} = useLanguage();
    const isKorean = language === "ko-KP";
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    const lines = isKorean ? [
        {k: "사명", v: "기술 창조와 후대 교육"},
        {k: "경력", v: "19년 이상의 실천"},
        {k: "안드로이드", v: "6개 응용프로그램 공개"},
        {k: "웹", v: "독립적으로 건설한 디지털 성과"},
        {k: "원칙", v: "명백한 구조 · 지속 가능한 코드"},
        {k: "목표", v: "다음 위대한 성과를 향하여"}
    ] : TERMINAL_LINES;
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
        }, {threshold: 0.4});
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return (
        <div className={"terminal" + (started ? " is-running" : "") + (isKorean ? " terminal--epic" : "")} ref={ref}>
            <div className="terminal__bar"><span className="terminal__dot"/><span className="terminal__dot"/><span className="terminal__dot"/><span className="terminal__title">{isKorean ? "기술 창조 기록 — sunmeat" : "zsh — sunmeat"}</span></div>
            <div className="terminal__body">
                <div className="terminal__row"><span className="terminal__prompt">$</span> {isKorean ? "기술 위업을 불러오는 중" : "npx sunmeat"}</div>
                {lines.map((line, i) => <div className="terminal__row terminal__row--out" key={line.k} style={{animationDelay: (0.35 + i * 0.16) + "s"}}><span className="terminal__key">{line.k}:</span> {line.v}</div>)}
                <div className="terminal__row terminal__row--out" style={{animationDelay: "1.45s"}}><span className="terminal__prompt">$</span><span className="terminal__cursor"/></div>
            </div>
            {isKorean && <div className="terminal__seal">기록은 남고, 창조는 계속된다</div>}
        </div>
    );
}

export default withTranslation(Terminal);