export function initHeader(pageType, projectName) {
    const headerDiv = document.getElementById("header");
    if (headerDiv) {
        // create logo div 
        const logoHeaderDiv = document.createElement("div");
        logoHeaderDiv.innerHTML = "<h1>Vinkkeli</h1>";
        logoHeaderDiv.setAttribute("class", "header-logo");
        headerDiv.appendChild(logoHeaderDiv); 

       /* 
        // create project title
        if (pageType === "project") {
            const projectTitleDiv = document.createElement("div");
            projectTitleDiv.innerHTML = `<h1>${projectName}</h1>`;
            projectTitleDiv.setAttribute("class", "header-title");
            headerDiv.append(projectTitleDiv);
        }
        */

        // create menu div
        const menuHeaderDiv = document.createElement("div");

        if (pageType === "index") {
            menuHeaderDiv.innerHTML = '<a href="contact.html">Yrityksestä</a>';
	    } else if (pageType === "contact") {
            menuHeaderDiv.innerHTML = '<a href="index.html">Etusivu</a>';
        } else if (pageType === "project") {
            menuHeaderDiv.innerHTML = '<a href="index.html">Etusivu</a><p>/</p><a href="contact.html">Yrityksestä</a>';
        }
        menuHeaderDiv.setAttribute("class", "header-menu");
        headerDiv.append(menuHeaderDiv);


    }
}
