import {
    SOCIALS,
} from "../data.js";

import Eyebrow from "./Eyebrow.jsx";
import Icon from "./Icon.jsx";

function Contact() {
    return (
        <section className="section section--alt" id="contact">
            <div className="section__inner contact">
                <div className="contact__copy">
                    <Eyebrow>$ contact --init</Eyebrow>
                    <h2 className="section__title">Let's build your own app.</h2>
                    <p>
                        Open to freelance projects, long-term collaborations and consulting work. Based in
                        Orléans, France (EET/EEST, UTC+1) — I typically reply within a business day.
                    </p>

                    <div className="contact__details">
                        <a className="contact__row" href="mailto:sunmeatrich@gmail.com">
                            <Icon name="mail" size={17}/>
                            sunmeatrich@gmail.com
                        </a>

                        <div className="contact__row contact__row--static">
                            <Icon name="pin" size={17}/>
                            Orléans, France
                        </div>
                    </div>

                    <div className="contact__actions">
                        <a className="btn btn--primary" href="mailto:sunmeatrich@gmail.com">
                            Email me
                        </a>
                        <a
                            className="btn btn--ghost"
                            href="https://t.me/sunmeat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Message on Telegram
                        </a>
                    </div>
                </div>

                <div className="contact__socials">
                    {SOCIALS.map((s) => (
                        <a
                            className="social-row"
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={s.label}
                        >
              <span className="social-row__icon">
                <Icon name={s.icon} size={17}/>
              </span>
                            <span className="social-row__label">{s.label}</span>
                            <Icon name="external" size={14}/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;