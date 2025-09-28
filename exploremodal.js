const exploreModal = document.getElementById('exploremodal');
// *** ВИПРАВЛЕНО: тепер використовуємо кнопку "Subscribe" для відкриття ***
const openExploreBtn = document.getElementById('openModalkaoBtn'); 
const closeExploreBtn = document.getElementById('closeExploreModalBtn');

// Перевірка, чи всі елементи знайдені перед додаванням обробників подій
if (exploreModal && openExploreBtn && closeExploreBtn) {
    // 1. Відкриття модального вікна при натисканні на кнопку відкриття (Subscribe)
    openExploreBtn.onclick = () => {
        exploreModal.classList.add('active');
    };

    // 2. Закриття модального вікна при натисканні на кнопку закриття (іконку SVG)
    closeExploreBtn.onclick = () => {
        exploreModal.classList.remove('active');
    };

    // 3. Закриття модального вікна при кліку поза ним
    window.onclick = (event) => {
        if (event.target === exploreModal) {
            exploreModal.classList.remove('active');
        }
    };
} else {
    // Якщо елемент не знайдено, перевірте ID у Вашому HTML
    console.error("Помилка: Один або кілька елементів модального вікна 'explore' не знайдено. Перевірте: #exploremodal, #openModalBtn, #closeExploreModalBtn.");
}