import Eyebrow from "./Eyebrow.jsx";
import SiteCard from "./Sitecard.jsx";
import {SITES} from "../data.js";

function Websites() {
    return (
        <section className="section" id="websites">
            <div className="section__inner">
                <Eyebrow>$ ls websites/ --deployed</Eyebrow>
                <h2 className="section__title">Side projects, live on the web.</h2>
                <p className="section__sub">
                    A growing collection of small sites and experiments — deployed independently, each one
                    built to try out an idea, a technique, or just for fun.
                </p>
                <div className="sites__grid">
                    {SITES.map((site) => (
                        <SiteCard site={site} key={site.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Websites;