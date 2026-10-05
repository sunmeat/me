import React from "react";
import {COFFEE_URL} from "../data.js";
import Icon from "./Icon.jsx";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <span>© 2019-{new Date().getFullYear()} • Oleksandr Zahoruiko • Built with ❤️ & React • Available for projects</span>
                <a className="coffee-btn" href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                    <Icon name="coffee" size={15}/>
                    Buy me one more coffee
                </a>
                <button
                    className="footer__top"
                    onClick={() => document.getElementById("top")?.scrollIntoView({behavior: "smooth"})}
                >
                    Back to top
                    <Icon name="arrow" size={14}/>
                </button>
            </div>
        </footer>
    );
}

export default Footer;