import React from "react";
import "./App.css";

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
import NewsFeed from "./components/NewsFeed.jsx";

export default function App() {
    return (
        <div className="page">
            <Nav/>
            <main>
                <Hero/>
                <About/>
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
    );
}