document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.querySelector('.treat_container--content--button');
  const targetSection = document.getElementById('productslr');

  if (scrollButton && targetSection) {
    scrollButton.addEventListener('click', function(event) {
      event.preventDefault(); // Запобігає стандартній поведінці кнопки (якщо вона, наприклад, знаходиться всередині форми)

      targetSection.scrollIntoView({
        behavior: 'smooth' // Забезпечує плавний скролінг
      });
    });
  }
});