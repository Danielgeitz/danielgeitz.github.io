var currentProjectIndex = 0;
var projects = document.querySelectorAll('.card');

function expandCard(card) {
    currentProjectIndex = Array.from(projects).indexOf(card);
    updateOverlayContent(card);
    document.querySelector('.overlay').style.display = 'block';
    card.classList.add('expanded');
}

function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.card.expanded').classList.remove('expanded');
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateOverlayContent(projects[currentProjectIndex]);
    document.querySelector('.card.expanded').classList.add('next');
    setTimeout(function() {
        document.querySelector('.card.expanded').classList.remove('next');
    }, 300); // Adjust timing to match transition duration
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateOverlayContent(projects[currentProjectIndex]);
    document.querySelector('.card.expanded').classList.add('prev');
    setTimeout(function() {
        document.querySelector('.card.expanded').classList.remove('prev');
    }, 300); // Adjust timing to match transition duration
}
