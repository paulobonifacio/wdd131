// Get the current year for the copyright
const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

// Get the last modified date for the document
const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const postsElement = document.querySelector("#reviews");
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 1;
postsElement.textContent = reviewCount;

localStorage.setItem("reviewCount", reviewCount);