var currentProjectIndex = 0;
var projects = document.querySelectorAll('.card');

function expandCard(card) {
    currentProjectIndex = Array.from(projects).indexOf(card);
    updateOverlayContent(card);
    document.getElementById('overlay').classList.add('show');
}

function updateOverlayContent(card) {
    document.getElementById('overlay-image').src = card.querySelector('img').src;
    document.getElementById('overlay-title').innerText = card.querySelector('h3').innerText;
    document.getElementById('overlay-description').innerText = card.querySelector('p').innerText;

    // Get the extra content from the data attribute
    var extraContentHTML = card.dataset.extraContent;
    // Set the extra content in the overlay
    document.getElementById('overlay-extra-content').innerHTML = extraContentHTML;
}


function closeOverlay() {
    document.getElementById('overlay').classList.remove('show');
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateOverlayContent(projects[currentProjectIndex]);
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateOverlayContent(projects[currentProjectIndex]);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav_links');
    navLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('language-toggle');
    const elements = document.querySelectorAll('[data-en]');

    langToggle.addEventListener('click', function() {
        const isGerman = langToggle.textContent === 'EN';

        elements.forEach(el => {
            el.textContent = isGerman ? el.getAttribute('data-en') : el.getAttribute('data-de');
        });

        langToggle.textContent = isGerman ? 'DE' : 'EN';
    });
});
