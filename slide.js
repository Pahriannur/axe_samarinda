
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide-image');
    const wrapper = document.querySelector('.wrapper');

    function showSlide(index) {
        const slideWidth = slides[0].clientWidth;
        wrapper.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Automatic slide
    setInterval(nextSlide, 3000); // 3 seconds

    // Event listeners for navigation arrows
    document.querySelector('.arrow.left').addEventListener('click', prevSlide);
    document.querySelector('.arrow.right').addEventListener('click', nextSlide);

