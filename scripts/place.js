// Get the current year for the copyright
const currentYearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get the last modified date for the document
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;

const temperature = 26
const windSpeed = 2

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16);
        const roundedWindChill = Math.round(windChill * 100) / 100;
        return roundedWindChill
    } else {
        return "N/A";
    }
}
const windChillFactor = document.querySelector("#windchill-factor");
windChillFactor.textContent = calculateWindChill(temperature, windSpeed);
