import {useLanguage, withTranslation} from "../i18n.jsx";
import { BIO, STATS } from "../data.js";
import Eyebrow from "./Eyebrow.jsx";
import Icon from "./Icon.jsx";
import Terminal from "./Terminal.jsx";

function Hero() {
    const {language} = useLanguage();
    const isKorean = language === "ko-KP";
    const isChurchSlavonic = language === "cu";
    return (
        <section className={"hero" + (isKorean ? " hero--epic" : "")} id="top">
            <div className="hero__inner">
                <div className="hero__copy">
                    <Eyebrow>{isKorean ? "위대한 기술 창조의 력사 · 제1장" : isChurchSlavonic ? "$ азъесмь" : "$ whoami"}</Eyebrow>
                    <h1 className="hero__title">
                        {isKorean ? <>Oleksandr Zahoruiko<span className="hero__title-accent hero__title-accent--epic">기술 창조의 선구자</span></> : isChurchSlavonic ? <>Александр Загоруйко —<br/><span className="hero__title-accent hero__title-accent--epic">Созидатель программъ и сѣтевыхъ творенїй</span></> : <>Oleksandr Zahoruiko —<br/><span className="hero__title-accent">Android / Full-Stack Developer</span></>}
                    </h1>
                    <p className="hero__lede">{isKorean ? "19년을 넘는 개발과 교육의 력사. 여섯개의 안드로이드 응용프로그램과 세계를 향해 공개된 웹 건설물들. 위대한 구상은 코드가 되고, 코드는 현실을 변화시킨다." : BIO}</p>
                    {isKorean && <div className="hero__declaration"><span className="hero__declaration-mark">주체 · 창조 · 전진</span><span>불굴의 탐구정신으로 설계하고, 정밀한 기술로 건설하며, 세계를 향해 공개한다.</span></div>}
                    <div className="hero__actions">
                        <a className="btn btn--primary" href="#websites" onClick={(e) => { e.preventDefault(); document.getElementById("websites")?.scrollIntoView({behavior: "smooth"}); }}>{isKorean ? "위대한 디지털 성과를 보라" : isChurchSlavonic ? "Узри сѣтевыя творенїя" : "View published sites"}<Icon name="arrow" size={16}/></a>
                        <a className="btn btn--ghost" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior: "smooth"}); }}>{isKorean ? "기술 협력의 문을 열라" : isChurchSlavonic ? "Начни новое дѣло" : "Start a project"}</a>
                    </div>
                </div>
                <Terminal/>
            </div>
            <div className="hero__stats">{STATS.map((s) => <div className="hero__stat" key={s.label}><div className="hero__stat-value">{s.value}</div><div className="hero__stat-label">{s.label}</div></div>)}</div>
            {isKorean && <div className="hero__seal"><span className="hero__seal-line"/><span>기술로 세우고, 지식으로 잇고, 성과로 증명한다</span><span className="hero__seal-line"/></div>}
        </section>
    );
}

export default withTranslation(Hero);