document.addEventListener('DOMContentLoaded', () => {
    initializeForm();
    loadFormData();
});

function initializeForm() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const formData = getFormData();
    saveFormData(formData);
    displayThankYouMessage();
}

function getFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    return { name, email, phone, message };
}

function saveFormData(formData) {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}

function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('contactFormData'));
    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('message').value = formData.message;
    }
}

function displayThankYouMessage() {
    const form = document.getElementById('contact-form');
    form.innerHTML = `<p>Thank you for getting in touch! We have received your message.</p>`;
}

// Get the current year for the copyright
const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

// Get the last modified date for the document
const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);
