function menu() {
    const container = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    container.appendChild(title);


    const beverages = document.createElement("div");
    beverages.classList.add("beverages");
    container.appendChild(beverages);

    const beveragesTitle = document.createElement("h1");
    beveragesTitle.textContent = "Beverages";
    beverages.appendChild(beveragesTitle);

    const tea = document.createElement("div");
    tea.classList.add("catnip");
    beverages.appendChild(tea);

    const catnip = document.createElement("h3");
    catnip.textContent = "Catnip Tea";
    tea.appendChild(catnip);

    const catnipDesc = document.createElement("p");
    catnipDesc.textContent = "blabla";
    tea.appendChild(catnipDesc);

    const catnipPrice = document.createElement("p");
    catnipPrice.textContent = "2$";
    tea.appendChild(catnipPrice);

    const milk = document.createElement("div");
    milk.classList.add("milk");
    beverages.appendChild(milk);

    const milkTitle = document.createElement("h3");
    milkTitle.textContent = "Fresh milk";
    milk.appendChild(milkTitle);

    const milkDesc = document.createElement("p");
    milkDesc.textContent = "blabla";
    milk.appendChild(milkDesc);

    const milkPrice = document.createElement("p");
    milkPrice.textContent = "1$";
    milk.appendChild(milkPrice);


    const meals = document.createElement("div");
    meals.classList.add("meals");
    container.appendChild(meals);

    const mealsTitle = document.createElement("h1");
    mealsTitle.textContent = "Meals";
    meals.appendChild(mealsTitle);

    const tuna = document.createElement("div");
    tuna.classList.add("tunaCan");
    meals.appendChild(tuna);

    const tunaCan = document.createElement("h3");
    tunaCan.textContent = "Deluxe tuna can";
    tuna.appendChild(tunaCan);

    const tunaCanDesc = document.createElement("p");
    tunaCanDesc.textContent = "blabla";
    tuna.appendChild(tunaCanDesc);

    const tunaCanPrice = document.createElement("p");
    tunaCanPrice.textContent = "5$";
    tuna.appendChild(tunaCanPrice);

    const lasagna = document.createElement("div");
    lasagna.classList.add("lasagna");
    meals.appendChild(lasagna);

    const lasagnaTitle = document.createElement("h3");
    lasagnaTitle.textContent = "Lasagna";
    lasagna.appendChild(lasagnaTitle);

    const lasagnaDesc = document.createElement("p");
    lasagnaDesc.textContent = "blabla";
    lasagna.appendChild(lasagnaDesc);

    const lasagnaPrice = document.createElement("p");
    lasagnaPrice.textContent = "10$";
    lasagna.appendChild(lasagnaPrice);
};

export { menu };