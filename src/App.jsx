import React from "react";
import {LanguageProvider} from "./i18n.jsx";
import "./App.css";
import "./QuenyaEpic.css";

import Estimator from "./components/Estimator.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Apps from "./components/Apps.jsx";
import OpenSource from "./components/OpenSource.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Websites from "./components/Websites.jsx";
import AadsBanner from "./components/AadsBanner.jsx";
import VisitorSupport from "./components/VisitorSupport.jsx";
import NewsFeed from "./components/NewsFeed.jsx";
import StarlinkOffer from "./components/StarlinkOffer.jsx";
import KoreanMarch from "./components/KoreanMarch.jsx";
import QuenyaMusic from "./components/QuenyaMusic.jsx";

export default function App() {
    return (
        <LanguageProvider>
        <KoreanMarch/>
        <QuenyaMusic/>
        <div className="page">
            <Nav/>
            <main>
                <Hero/>
                <StarlinkOffer/>
                <About/>
                <AadsBanner/>
                <VisitorSupport/>
                <Skills/>
                <Apps/>
                <Websites/>
                <OpenSource/>
                <Experience/>
                <Contact/>
                <Estimator/>
                <NewsFeed/>
            </main>
            <Footer/>
        </div>
        </LanguageProvider>
    );
}