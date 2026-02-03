const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

fetch("data/projektisivut.json")
  .then(res => res.json())
  .then(projects => {
    const project = projects[projectId];
    if (!project) return;

    document.getElementById("page-title").textContent = project.title;
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-year").textContent = project.year;
    document.getElementById("project-description").textContent = project.description;

    const imagesContainer = document.getElementById("project-images");
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = `img/${src}`;
      imagesContainer.appendChild(img);
    });
  });
