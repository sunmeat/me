import test from "node:test";
import assert from "node:assert/strict";
import {DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getLanguageFromPath, getLanguagePath} from "../src/language-routing.js";

test("root is always Ukrainian", () => {
  assert.equal(DEFAULT_LANGUAGE, "uk");
  assert.equal(getLanguageFromPath("/"), "uk");
  assert.equal(getLanguageFromPath(""), "uk");
  assert.equal(getLanguagePath("uk"), "/");
});
test("all selectable languages have stable, shareable URLs", () => {
  assert.equal(SUPPORTED_LANGUAGES.length, 13);
  for (const language of SUPPORTED_LANGUAGES) {
    assert.equal(getLanguageFromPath(getLanguagePath(language)), language);
    assert.equal(getLanguageFromPath(getLanguagePath(language) + "/"), language);
  }
});
test("example and themed routes resolve correctly", () => {
  for (const code of ["en", "es", "qya", "ko-KP", "pt-BR"]) {
    assert.equal(getLanguageFromPath("/" + code), code);
  }
});
test("Ukrainian alias canonicalizes to root", () => {
  assert.equal(getLanguageFromPath("/uk"), "uk");
  assert.equal(getLanguagePath("uk"), "/");
});
test("unknown paths do not override the default", () => {
  assert.equal(getLanguageFromPath("/invalid"), "uk");
  assert.equal(getLanguageFromPath("/en/other"), "uk");
  assert.equal(getLanguagePath("unknown"), "/");
});
