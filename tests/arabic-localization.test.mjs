import test from "node:test";
import assert from "node:assert/strict";
import {arabizeVisibleText} from "../src/arabic-localization.js";
test("translate visible technology brands to Arabic letters",()=>{
  const value=arabizeVisibleText("GitHub repositories, Android apps, React & Firebase");
  assert.doesNotMatch(value,/[A-Za-z]/);
  assert.match(value,/غيت هاب/);
  assert.match(value,/أندرويد/);
});
test("unfamiliar UI text never leaks Latin words",()=>{
  assert.doesNotMatch(arabizeVisibleText("Unknown CustomWidget Dashboard"),/[A-Za-z]/);
});
test("semantic phrases are translated",()=>{
  const output=arabizeVisibleText("Full-Stack software engineer and machine learning");
  assert.match(output,/تطوير متكامل/);
  assert.match(output,/مهندس برمجيات/);
  assert.match(output,/تعلّم الآلة/);
});
test("preserve actual URLs and email addresses",()=>{
  const s="https://github.com/sunmeat/me sunmeat@example.com";
  assert.equal(arabizeVisibleText(s),s);
});
test("keep already Arabic text unchanged",()=>{
  const text="مرحبًا، ١٩ عامًا";
  assert.equal(arabizeVisibleText(text),text);
});
