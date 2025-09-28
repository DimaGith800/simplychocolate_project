const openSellersModalBtn = document.getElementById('openModalBtn');
const closeSellersModalBtn = document.getElementById('closeModalBtn');
const openSellersPopupBtn = document.getElementById('openPopupBtn');
const closeSellersPopupBtn = document.getElementById('closePopupBtn');
const sellersModal = document.getElementById('sellermodal');
const sellersForm = document.querySelector('.sellers_container--content');
const sellersPopup = document.getElementById('sellerspopupu');

// Обробник для кнопки "Buy now" (Відкриває модальне вікно)
openSellersModalBtn.addEventListener('click', () => {
    sellersModal.classList.add('active');
});

// Обробник для кнопки "X" у формі (Закриває модальне вікно)
closeSellersModalBtn.addEventListener('click', () => {
    sellersModal.classList.remove('active');
});

// Обробник для кнопки "Submit" (Відкриває попап)
openSellersPopupBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки
    sellersForm.style.display = 'none'; // Приховуємо форму
    sellersPopup.style.display = 'flex'; // Показуємо попап
    sellersPopup.classList.add('active'); // Додаємо клас для анімації та видимості
});

// Обробник для кнопки "X" у попапі (Закриває попап та модальне вікно)
closeSellersPopupBtn.addEventListener('click', () => {
    sellersPopup.style.display = 'none'; // Приховуємо попап
    sellersModal.classList.remove('active'); // Закриваємо всю модалку
    sellersPopup.classList.remove('active'); // Видаляємо клас, щоб запобігти проблемам з анімацією
    sellersForm.style.display = 'block'; // Повертаємо форму у видимий стан для наступного відкриття
});

// Закриття модального вікна при кліку на фон
window.addEventListener('click', (event) => {
    if (event.target === sellersModal) {
        sellersModal.classList.remove('active');
        // Переконуємось, що попап також прихований, якщо був відкритий
        sellersPopup.classList.remove('active');
        sellersForm.style.display = 'block';
    }
});