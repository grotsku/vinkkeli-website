const grid = document.getElementById("projektit-grid");

fetch("./projects.json")
.then(res => res.json())
.then(projects => {
    projects.forEach(project => {
        const tile = document.createElement("div");
        tile.className = "projekti-tile";

        tile.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
        `
        grid.appendChild(tile);
    });
});