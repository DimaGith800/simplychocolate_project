// Отримуємо елементи
const openReviewModalBtn = document.getElementById('openReviewModalBtn');
const reviewModal = document.getElementById('reviewmodal');
const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
const reviewForm = document.getElementById('reviewform');
const openReviewPopupBtn = document.getElementById('openreviewpopup');
const reviewPopup = document.getElementById('reviewpopup');
const closeReviewPopupBtn = document.getElementById('closereviewpopupbtn');

// 1. Обробник для кнопки "Leave a review" (Відкриває форму)
openReviewModalBtn.onclick = () => {
    reviewModal.classList.add('active');
};

// 2. Обробник для кнопки "X" у формі (Закриває форму)
closeReviewModalBtn.onclick = () => {
    reviewModal.classList.remove('active');
};

// 3. Обробник для кнопки "Send" у формі (Відкриває попап і приховує форму)
openReviewPopupBtn.onclick = (event) => {
    event.preventDefault(); // Запобігає перезавантаженню сторінки
    reviewForm.style.display = 'none'; // Приховує форму
    reviewPopup.style.display = 'flex'; // Показує попап
};

// 4. Обробник для кнопки "X" у попапі (Закриває попап і повертає форму)
closeReviewPopupBtn.onclick = () => {
    reviewPopup.style.display = 'none'; // Приховує попап
    reviewForm.style.display = 'block'; // Показує форму знову
    reviewModal.classList.remove('active'); // Закриває все модальне вікно
};

// 5. Закриття вікна при кліку на фон
window.onclick = (event) => {
    if (event.target === reviewModal) {
        reviewModal.classList.remove('active');
        // Переконуємось, що попап також ховається, якщо був відкритий
        reviewPopup.style.display = 'none';
        reviewForm.style.display = 'block';
    }
};