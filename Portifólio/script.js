document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeToggle = document.querySelector('.close-toggle');
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });

    closeToggle.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });
});
