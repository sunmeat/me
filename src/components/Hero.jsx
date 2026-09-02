import {
    BIO,
    STATS,
} from "../data.js";

import Eyebrow from "./Eyebrow.jsx";
import Icon from "./Icon.jsx";
import Terminal from "./Terminal.jsx";

function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero__inner">
                <div className="hero__copy">
                    <Eyebrow>$ whoami</Eyebrow>
                    <h1 className="hero__title">
                        Oleksandr Zahoruiko —<br/>
                        <span className="hero__title-accent">Android / Full-Stack Developer</span>
                    </h1>
                    <p className="hero__lede">
                        {BIO}
                    </p>
                    <div className="hero__actions">
                        <a className="btn btn--primary" href="#apps" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("apps")?.scrollIntoView({behavior: "smooth"});
                        }}>
                            View published apps
                            <Icon name="arrow" size={16}/>
                        </a>
                        <a className="btn btn--ghost" href="#contact" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
                        }}>
                            Start a project
                        </a>
                    </div>
                </div>

                <Terminal/>
            </div>

            <div className="hero__stats">
                {STATS.map((s) => (
                    <div className="hero__stat" key={s.label}>
                        <div className="hero__stat-value">{s.value}</div>
                        <div className="hero__stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;