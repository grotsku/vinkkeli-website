export function initHeader(pageType) {
    const headerDiv = document.getElementById("header");
    if (headerDiv) {
        // create upper header
        const logoHeaderDiv = document.createElement("div");
        logoHeaderDiv.innerHTML = "<h1>Vinkkeli</h1>";
        logoHeaderDiv.setAttribute("class", "header-logo");
        headerDiv.appendChild(logoHeaderDiv); 

        // create lower header
        const menuHeaderDiv = document.createElement("div");
	if (pageType === "index") {
        menuHeaderDiv.innerHTML = '<a href="contact.html">Yrityksestä</a>';
	} else if (pageType === "contact") {
        menuHeaderDiv.innerHTML = '<a href="index.html">Etusivu</a>';
    }
        menuHeaderDiv.setAttribute("class", "header-menu");
        headerDiv.append(menuHeaderDiv);
    }
}
