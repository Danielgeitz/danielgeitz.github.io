function expandCard(card) {
    document.getElementById('overlay-image').src = card.querySelector('img').src;
    document.getElementById('overlay-title').innerText = card.querySelector('h3').innerText;
    document.getElementById('overlay-description').innerText = card.querySelector('p').innerText;
    document.getElementById('overlay').classList.add('show');
}

function closeOverlay() {
    document.getElementById('overlay').classList.remove('show');
}
