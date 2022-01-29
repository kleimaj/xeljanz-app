var incorrectResult = `<i class="fas fa-times"></i>
INCORRECT!`;
var correctResult = `<i class="fas fa-check"></i>
CORRECT!`;

var defaultSubmit = `<i class="fas fa-check"></i>
SUBMIT`;
var correctSubmit = `<i class="fas fa-times"></i>
CLOSE`;

document.querySelector('.review-btn').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('hidden');
});

var highlightButton = (e) => {
  document
    .querySelectorAll('.modal-btn')
    .forEach((btn) => btn.classList.remove('active'));
  document.querySelector('.result').classList.add('hidden');
  e.target.classList.add('active');
};

var closeModal = () => {
  // Reset modal properties
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.result').classList.add('hidden');
  document
    .querySelectorAll('.modal-btn')
    .forEach((btn) => btn.classList.remove('active'));
  document.querySelector('.submit').innerHTML = defaultSubmit;
  document.querySelector('.submit').removeEventListener('click', closeModal);
  document.querySelector('.submit').addEventListener('click', checkAnswer);
};

var checkAnswer = () => {
  if (
    document.querySelector('.modal-btn.active') &&
    document.querySelector('.modal-btn.active').innerText ==
      'TRUE'
  ) {
    document.querySelector('.result').innerHTML = correctResult;
    document.querySelector('.result').classList.remove('incorrect');
    document.querySelector('.result').classList.remove('hidden');

    document.querySelector('.submit').innerHTML = correctSubmit;
    document.querySelector('.submit').removeEventListener('click', checkAnswer);
    document.querySelector('.submit').addEventListener('click', closeModal);
  } else {
    document.querySelector('.result').innerHTML = incorrectResult;
    document.querySelector('.result').classList.remove('hidden');
    document.querySelector('.result').classList.add('incorrect');
  }
};

document
  .querySelectorAll('.modal-btn')
  .forEach((btn) => btn.addEventListener('click', highlightButton));

document.querySelector('.submit').addEventListener('click', checkAnswer);
document.querySelector('.close-btn').addEventListener('click', closeModal);
