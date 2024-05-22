document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
            } else {
                document.querySelectorAll('.project-card').forEach(c => c.classList.remove('expanded'));
                card.classList.add('expanded');
            }
        });
    });
});