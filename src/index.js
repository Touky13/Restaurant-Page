console.log("Hello World!");
homepage();

const container = document.querySelector("#content");
const homepageBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    container.innerHTML = "";
    menu();
});

homepageBtn.addEventListener("click", () => {
    container.innerHTML = "";
    homepage();
})

import { homepage } from "./homepage.js";
import { menu } from "./menu.js";