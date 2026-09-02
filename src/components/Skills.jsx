import {
    SKILL_GROUPS,
} from "../data.js";

import Eyebrow from "./Eyebrow.jsx";
import React from "react";

function Skills() {
    return (
        <section className="section section--alt" id="skills">
            <div className="section__inner">
                <Eyebrow>$ ls skills/</Eyebrow>
                <h2 className="section__title">A toolkit built for shipping, not just prototyping.</h2>
                <div className="skills__grid">
                    {SKILL_GROUPS.map((group) => (
                        <div className="skill-card" key={group.title}>
                            <div className="skill-card__head">
                                <h3>{group.title}</h3>
                                <span className="skill-card__note">{group.note}</span>
                            </div>
                            <div className="skill-card__tags">
                                {group.items.map((item) => (
                                    <span className="tag" key={item}>
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;