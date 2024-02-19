const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
let intervalId;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function startCarousel() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    stopCarousel();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    stopCarousel();
});

startCarousel();
