const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');


openBtn.onclick = () => {
  modal.classList.add('active');
};


closeBtn.onclick = () => {
  modal.classList.remove('active');
};


window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
};