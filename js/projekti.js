import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { initHeader } from "../modules/header.js";


const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// projektisivut.json sisältää projektikohtaiset tiedot. projects.json sisältää kaikki projektit listana, jota käytetään index.html-sivulla.
fetch("data/projektisivut.json")
  .then(res => res.json())
  .then(async projects => {
    const project = projects[projectId];
    if (!project) return;
    
    const response = await fetch(project.contentLink);
    const markdown = await response.text();
    const mdContent = marked.parse(markdown);

    document.getElementById("project-title").innerHTML = project.title;
    document.getElementById("project-description").innerHTML = mdContent;

    const imagesContainer = document.getElementById("project-images");
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = `img/${src}`;
      imagesContainer.appendChild(img);
    });

    initHeader("project", project.title);
  });

