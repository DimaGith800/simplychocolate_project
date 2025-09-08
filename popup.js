const sellersPopup = document.querySelector('.sellers_popup');
const openBtn = document.getElementById('openPopupBtn');
const closeBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popupcont'); // Це внутрішній контейнер


openBtn.onclick = (event) => {
    event.preventDefault(); 
    sellersPopup.classList.add('active'); // Додаємо клас active до правильного елемента
};


closeBtn.onclick = () => {
    sellersPopup.classList.remove('active');
};


window.onclick = (event) => {
    if (event.target === sellersPopup) {
        sellersPopup.classList.remove('active');
    }
};