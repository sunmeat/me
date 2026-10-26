import {useLanguage, withTranslation} from "../i18n.jsx";
import React from "react";
import {COFFEE_URL} from "../data.js";
import Icon from "./Icon.jsx";

function Footer() {
    const {language} = useLanguage();
    return (
        <footer className="footer">
            <div className="footer__inner">
                <span>{language === "cu" ? `© 2019-${new Date().getFullYear()} • Александр Загоруйко • Сотворено съ усердїемъ • Къ новымъ трудамъ готовъ` : isJapanese ? `© 2019-${new Date().getFullYear()} • Oleksandr Zahoruiko • ❤️ と React で制作 • ご依頼受付中` : `© 2019-${new Date().getFullYear()} • Oleksandr Zahoruiko • Built with ❤️ & React • Available for projects`}</span>
                <a className="coffee-btn" href={COFFEE_URL} target="_blank" rel="noopener noreferrer">
                    <Icon name={language === "cu" ? "goblet" : "coffee"} size={15}/>
                    {language === "cu" ? "милостыня" : isJapanese ? "コーヒーをごちそうする" : "Buy me one more coffee"}
                </a>
                <button
                    className="footer__top"
                    onClick={() => document.getElementById("top")?.scrollIntoView({behavior: "smooth"})}
                >
                    {language === "cu" ? "Возвратися горѣ" : isJapanese ? "ページ上部へ戻る" : "Back to top"}
                    <Icon name="arrow" size={14}/>
                </button>
            </div>
        </footer>
    );
}

export default withTranslation(Footer);