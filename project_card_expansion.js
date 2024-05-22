document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            projectCards.forEach(c => c.classList.remove('expanded'));
            document.body.classList.remove('blur');
            if (!isExpanded) {
                card.classList.add('expanded');
                document.body.classList.add('blur');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.project-card')) {
            document.querySelectorAll('.project-card').forEach(card => card.classList.remove('expanded'));
            document.body.classList.remove('blur');
        }
    });
});
