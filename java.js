// Carousel Functionality
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dotsNav = document.querySelector('.carousel-dots');
let currentIndex = 0;

// Create dots
slides.forEach(function(_, idx) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if(idx === 0) dot.classList.add('active');
    dot.addEventListener('click', function() {
        goToSlide(idx);
    });
    dotsNav.appendChild(dot);
});
const dots = Array.from(dotsNav.children);

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width + 20; // 20px margin
    track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
    dots.forEach(function(dot) { dot.classList.remove('active'); });
    dots[currentIndex].classList.add('active');
}

function goToSlide(idx) {
    currentIndex = idx;
    updateCarousel();
}

prevBtn.addEventListener('click', function() {
    if(currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', function() {
    if(currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Optional: Auto-play
setInterval(function() {
    nextBtn.click();
}, 4000);

// Initial update
updateCarousel();