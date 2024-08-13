// Toggle menu on mobile view
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('div');
    toggleButton.innerHTML = '&#9776;';
    toggleButton.className = 'toggle-button';
    toggleButton.style.fontSize = '24px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.display = 'none';

    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            toggleButton.style.display = 'block';
        } else {
            toggleButton.style.display = 'none';
            nav.classList.remove('active');
        }
    });

    if (window.innerWidth <= 768) {
        toggleButton.style.display = 'block';
    }
});
