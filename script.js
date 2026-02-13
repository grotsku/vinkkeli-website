import { initHeader } from "./modules/header.js";

initHeader("index");

const grid = document.getElementById("projekti-grid");

fetch("./data/etusivuProjektit.json")
.then(res => res.json())
.then(projects => {
    projects.forEach(project => {
        const tile = document.createElement("div");
        tile.className = "projekti-tile";

        tile.innerHTML = `
            <h3><a href="${project.link}">${project.title}</a></h3>
            <a href="${project.link}"><img src="${project.image}" alt="${project.title}"></a>
            <p>${project.description}</p>
        `
        grid.appendChild(tile);
    });
});
