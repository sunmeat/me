import Eyebrow from "./Eyebrow.jsx";
import AppCard from "./AppCard.jsx";
import {APPS} from "../data.js";

function Apps() {
    return (
        <section className="section" id="apps">
            <div className="section__inner">
                <Eyebrow>$ ls apps/ --published</Eyebrow>
                <h2 className="section__title">Live on Google Play right now.</h2>
                <p className="section__sub">
                    Six apps across utilities, casual games and local business tools — each one designed,
                    built and published independently.
                </p>
                <div className="apps__grid">
                    {APPS.map((app) => (
                        <AppCard app={app} key={app.id}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Apps;