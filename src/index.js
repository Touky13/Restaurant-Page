console.log("Hello World!");
homepage();

const container = document.querySelector("#content");
const homepageBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

menuBtn.addEventListener("click", () => {
    container.innerHTML = "";
    menu();
});

homepageBtn.addEventListener("click", () => {
    container.innerHTML = "";
    homepage();
});

aboutBtn.addEventListener("click", () => {
    container.innerHTML = "";
    about();
});

import { homepage } from "./homepage.js";
import { menu } from "./menu.js";
import { about } from "./about.js";