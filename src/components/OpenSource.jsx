import Eyebrow from "./Eyebrow.jsx";
import Icon from "./Icon.jsx";
import {REPOS} from "../data.js";

function OpenSource() {
    return (
        <section className="section section--alt" id="opensource">
            <div className="section__inner">
                <Eyebrow>$ git log --stat</Eyebrow>
                <div className="opensource__head">
                    <h2 className="section__title">Open source &amp; teaching material.</h2>
                    <a
                        className="btn btn--ghost"
                        href="https://github.com/sunmeat"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub profile
                        <Icon name="external" size={15}/>
                    </a>
                </div>
                <div className="repos__grid">
                    {REPOS.map((r) => (
                        <a
                            className="repo-card"
                            href={`https://github.com/sunmeat/${r.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={r.name}
                        >
                            <div className="repo-card__name">{r.name}</div>
                            <p className="repo-card__desc">{r.desc}</p>
                            <span className="repo-card__lang">
                <span className="repo-card__dot"/>
                                {r.lang}
              </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OpenSource;