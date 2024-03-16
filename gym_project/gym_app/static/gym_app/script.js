document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        const isVisible = navLinks.style.display === 'flex';
        navLinks.style.display = isVisible ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
    });
});
