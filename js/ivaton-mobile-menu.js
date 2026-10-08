"use strict";
(() => {
    const header = document.querySelector(".header");
    const nav = header && header.querySelector("nav");
    if (!nav || header.querySelector(".ivaton-menu-toggle")) return;
    const language = document.documentElement.lang.toLowerCase().split("-")[0];
    const labels = {
        hr: ["Otvori izbornik", "Zatvori izbornik"],
        de: ["Menü öffnen", "Menü schließen"],
        en: ["Open menu", "Close menu"]
    }[language] || ["Open menu", "Close menu"];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ivaton-menu-toggle";
    nav.id = nav.id || "ivaton-main-nav";
    button.setAttribute("aria-controls", nav.id);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", labels[0]);
    for (let i = 0; i < 3; i++) {
        const line = document.createElement("span");
        line.setAttribute("aria-hidden", "true");
        button.appendChild(line);
    }
    const mobile = window.matchMedia("(max-width: 640px)");
    function setOpen(open, returnFocus = false) {
        const expanded = Boolean(open && mobile.matches);
        header.classList.toggle("is-menu-open", expanded);
        button.setAttribute("aria-expanded", String(expanded));
        button.setAttribute("aria-label", labels[expanded ? 1 : 0]);
        if (returnFocus) button.focus();
    }
    button.addEventListener("click", () => {
        setOpen(button.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", event => {
        if (event.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
            setOpen(false, true);
        }
    });
    document.addEventListener("click", event => {
        if (!header.contains(event.target)) setOpen(false);
    });
    header.addEventListener("focusout", event => {
        if (!header.contains(event.relatedTarget)) setOpen(false);
    });
    mobile.addEventListener("change", () => {
        const focused = document.activeElement;
        setOpen(false);
        if (mobile.matches && nav.contains(focused)) button.focus();
        if (!mobile.matches && focused === button) nav.querySelector("a")?.focus();
    });
    header.insertBefore(button, nav);
    header.classList.add("has-mobile-menu");
})();
