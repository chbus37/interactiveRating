const btnSubmit = document.querySelector('#submitBtn');
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const circleBtn = document.querySelectorAll('.circle-btn');
const score = document.querySelector('#score');

btnSubmit.addEventListener('click', () => {
  firstCard.classList.add('hidden');
  secondCard.classList.remove('hidden');
});

circleBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.add('bg-orange-500');
    score.innerHTML = e.target.innerText;
  });
});
