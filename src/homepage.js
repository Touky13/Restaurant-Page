function homepage() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Cat's dinner";
    container.appendChild(title);

    const p = document.createElement("p");
    p.textContent = "text";
    container.appendChild(p);

    const opening = document.createElement("div");
    opening.classList.add("hours");
    opening.textContent = "opening hours";
    container.appendChild(opening);

    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "456 Tuna Avenue, Catnip City, Catnation";
    container.appendChild(location);
}

export { homepage };
