document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            hamburger.textContent = '✖'; 
        } else {
            hamburger.textContent = '☰'; 
        }
    });

    // footer update
    const lastModified = document.getElementById('last-modified');
    const now = new Date();
    lastModified.textContent = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
});
