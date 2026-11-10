import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {HERO_BIO} from "../src/hero-bio.js";

test("Hero prioritizes backend and frontend before Android in both editions", () => {
    assert.deepEqual(Object.keys(HERO_BIO), ["uk", "en"]);
    for (const [language, text] of Object.entries(HERO_BIO)) {
        assert.ok(text.length >= 320, language + " introduction is complete");
        const backend = text.indexOf(language === "uk" ? "бекенд" : "backend");
        const frontend = text.indexOf(language === "uk" ? "фронтенд" : "frontend");
        const android = text.indexOf("Android");
        assert.ok(backend >= 0 && frontend > backend && android > frontend, language + " specialization order");
        assert.match(text, /React/);
        assert.match(text, /Spring Boot/);
        assert.match(text, /Django/);
        assert.match(text, /ASP\.NET Core/);
        assert.match(text, /Node\.js/);
        assert.match(text, /Google Play/);
        assert.ok(!text.includes("Five+ published apps so far"));
    }
});

test("Ukrainian copy has no leftover English sentence and other locales retain original BIO", () => {
    assert.doesNotMatch(HERO_BIO.uk, /\b(?:I am|I'm|published apps so far|just the beginning|Over nineteen years)\b/i);
    assert.match(HERO_BIO.uk, /понад п’ять моїх застосунків/);
    const hero = readFileSync("src/components/Hero.jsx", "utf8");
    assert.match(hero, /HERO_BIO\[language\] \|\| BIO/);
    assert.match(hero, /translate=\{HERO_BIO\[language\] \? "no" : undefined\}/);
    assert.match(hero, /<h1 className="hero__title">/);
});
