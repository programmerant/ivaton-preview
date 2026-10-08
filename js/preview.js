"use strict";
(() => {
  const supported = ["hr", "en", "de"];
  const key = "ivaton-preview-language";
  const page = document.body.dataset.languagePage;
  function save(language) {
    try { localStorage.setItem(key, language); } catch (_) { /* Storage may be disabled. */ }
  }
  document.querySelectorAll("[data-language]").forEach(link => {
    link.addEventListener("click", () => save(link.dataset.language));
  });
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => event.preventDefault());
  });
  if (page !== "index") { save(page); return; }
  const requested = new URLSearchParams(location.search).get("lang");
  let saved;
  try { saved = localStorage.getItem(key); } catch (_) { /* Continue with browser language. */ }
  const browser = (navigator.languages || [navigator.language || "en"])
    .map(value => value.toLowerCase().split(/[-_]/)[0])
    .find(value => supported.includes(value));
  const language = [requested, saved, browser, "en"].find(value => supported.includes(value));
  location.replace(language + ".html" + location.hash);
})();
