function about() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About us";
    container.appendChild(title);

    const manager = document.createElement("div");
    manager.classList.add("manager");
    container.appendChild(manager);

    const managerTitle = document.createElement("h3");
    managerTitle.textContent = "Manager";
    manager.appendChild(managerTitle);

    const managerProfile = document.createElement("div");
    managerProfile.textContent = "mail";
    manager.appendChild(managerProfile);


    const chef = document.createElement("div");
    chef.classList.add("chef");
    container.appendChild(chef);

    const chefTitle = document.createElement("h3");
    chefTitle.textContent = "Chef";
    chef.appendChild(chefTitle);

    const chefProfile = document.createElement("div");
    chefProfile.textContent = "mail";
    chef.appendChild(chefProfile);
};

export { about };