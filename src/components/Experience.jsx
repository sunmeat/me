import Eyebrow from "./Eyebrow.jsx";
import {EDUCATION, EXPERIENCE} from "../data.js";

function Experience() {
    return (
        <section className="section" id="experience">
            <div className="section__inner">
                <Eyebrow>$ cat experience.log</Eyebrow>
                <h2 className="section__title">Experience &amp; education.</h2>

                <div className="timeline">
                    <h3 className="timeline__group">Experience</h3>
                    {EXPERIENCE.map((e) => (
                        <div className="timeline__item" key={e.role}>
                            <div className="timeline__marker"/>
                            <div className="timeline__content">
                                <div className="timeline__row">
                                    <h4>{e.role}</h4>
                                    <span className="timeline__time">{e.time}</span>
                                </div>
                                <div className="timeline__org">{e.org}</div>
                                <p>{e.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="timeline">
                    <h3 className="timeline__group">Education</h3>
                    {EDUCATION.map((e) => (
                        <div className="timeline__item" key={e.role}>
                            <div className="timeline__marker"/>
                            <div className="timeline__content">
                                <div className="timeline__row">
                                    <h4>{e.role}</h4>
                                    <span className="timeline__time">{e.time}</span>
                                </div>
                                <div className="timeline__org">{e.org}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;