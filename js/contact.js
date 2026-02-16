import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { initHeader } from "../modules/header.js";

initHeader("contact");

const cvDiv = document.getElementById("cvText");
const bioDiv = document.getElementById("bio");

// Hae bio-sisältö markdown-tiedostosta
const bioResponse = await fetch("../content/contactAboutMe.md");
const bioMarkdown = await bioResponse.text();
const bioParsedContent = marked.parse(bioMarkdown);
bioDiv.innerHTML = bioParsedContent;

// Hae CV:n sisältö markdown-tiedostosta
const cvResponse = await fetch("../content/contactCV.md");
const cvMarkdown = await cvResponse.text();
const cvParsedContent = marked.parse(cvMarkdown);
cvDiv.innerHTML = cvParsedContent;
