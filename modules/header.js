export function initHeader() {
    console.log("initHeader function started");
    const headerDiv = document.getElementById("header");
    console.log("headerDiv found: ", headerDiv);
    if (headerDiv) {
        // create upper header
        const upperHeaderDiv = document.createElement("div");
        upperHeaderDiv.innerHTML = "<h1>Vinkkeli</h1>";
        upperHeaderDiv.setAttribute("class", "header-upper");
        headerDiv.appendChild(upperHeaderDiv); 

        // create lower header
        const lowerHeaderDiv = document.createElement("div");
        lowerHeaderDiv.innerHTML = '<a href="index.html">Etusivu</a><a href="contact.html">Yrityksestä</a>';
        lowerHeaderDiv.setAttribute("class", "header-lower");
        headerDiv.append(lowerHeaderDiv);

        // add line break
        const hr = document.createElement("hr");
        headerDiv.append(hr);
    }
}