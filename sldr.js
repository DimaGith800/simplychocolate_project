function initializeSlider(containerSelector, dotsSelector, slidesSelector) {
    const sliderContainer = document.querySelector(containerSelector);
    const dots = document.querySelectorAll(dotsSelector);
    const slides = document.querySelectorAll(slidesSelector);

    // Виходимо з функції, якщо елементи не знайдені
    if (!sliderContainer || dots.length === 0 || slides.length === 0) {
        // console.error(`Не знайдено елементів для слайдера з селектором ${containerSelector}`); // Можна закоментувати для продакшену
        return;
    }

    let isMouseDown = false;
    let startX;
    let scrollLeft;
    const speedMultiplier = 0.7;
    let scrollTimeout;

    function updateDots() {
        const isMobile = window.innerWidth <= 767;

        if (isMobile) {
            const currentScroll = sliderContainer.scrollLeft;
            // Враховуємо gap при розрахунку
            const slideWidth = slides[0].offsetWidth;
            const gap = 17; // Фіксований gap, як у products
            
            // Складніший розрахунок для коректного визначення індексу
            // Обчислюємо середню позицію слайда
            const slideCenter = slideWidth / 2;
            let newIndex = 0;
            let closestDistance = Infinity;

            for (let i = 0; i < slides.length; i++) {
                const slideStart = i * (slideWidth + gap);
                const slideMiddle = slideStart + slideCenter;
                const distance = Math.abs(currentScroll - slideStart); 

                if (distance < closestDistance) {
                    closestDistance = distance;
                    newIndex = i;
                }
            }

            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[newIndex]) {
                dots[newIndex].classList.add('active');
            }
        } else {
            const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
            const scrollProgress = maxScrollLeft > 0 ? sliderContainer.scrollLeft / maxScrollLeft : 0;
            const newIndex = Math.round(scrollProgress * (dots.length - 1));

            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[newIndex]) {
                dots[newIndex].classList.add('active');
            }
        }
    }

    // Обробник кліків по точках
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const isMobile = window.innerWidth <= 767;
            const slideWidth = slides[0].offsetWidth;
            // Використовуємо gap 17px, як у .products
            const gap = 17; 
            const scrollPosition = index * (slideWidth + gap);

            sliderContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
            // updateDots викликається після scrollTimeout, тому тут можна не викликати
        });
    });

    // Слухачі подій миші для перетягування
    sliderContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isMouseDown = true;
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
        sliderContainer.style.cursor = 'grabbing';
    });

    sliderContainer.addEventListener('mouseup', () => {
        isMouseDown = false;
        sliderContainer.style.cursor = 'grab';
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isMouseDown = false;
        sliderContainer.style.cursor = 'grab';
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * speedMultiplier;
        sliderContainer.scrollLeft = scrollLeft - walk;
    });

    // Обробники подій дотику для мобільних пристроїв
    sliderContainer.addEventListener('touchstart', (e) => {
        isMouseDown = true;
        startX = e.touches[0].pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', () => {
        isMouseDown = false;
    });

    sliderContainer.addEventListener('touchmove', (e) => {
        if (!isMouseDown) return;
        const x = e.touches[0].pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * speedMultiplier;
        sliderContainer.scrollLeft = scrollLeft - walk;
    }, { passive: true });

    // Оновлення точок після закінчення прокрутки
    sliderContainer.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateDots();
        }, 100);
    });

    // Оновлення точок при завантаженні та зміні розміру екрана
    window.addEventListener('load', updateDots);
    window.addEventListener('resize', updateDots);

    // Ініціалізація точок при першому завантаженні
    updateDots();
}

// === Виклики функції для кожного слайдера ===
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider('.products_slider', '.products_dots--dot', '.products_slider--slides--slide');
    initializeSlider('.loved_slider', '.loved_dots--dot', '.loved_slider--slides--slide');
    
    // !!! НОВИЙ ВИКЛИК ДЛЯ СЕКЦІЇ SELLERS !!!
    initializeSlider('.sellers_container--content--slider', '.sellers_container--content--dots--dot', '.sellers_container--content--slider--slides--slide');
});