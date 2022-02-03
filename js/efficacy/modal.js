var incorrectResult = `<i class="fas fa-times"></i>
INCORRECT!`;
var correctResult = `<i class="fas fa-check"></i>
CORRECT!`;

var defaultSubmit = `<i class="fas fa-check"></i>
SUBMIT`;
var correctSubmit = `<i class="fas fa-times"></i>
CLOSE`;

var secondQuestion = `A SIGNIFICANTLY LOWER PROPORTION OF
PATIENTS TREATED WITH TOFACITINIB
EXPERIENCED A DISEASE FLARE AT WEEK
44 IN THE DB PHASE COMPARED TO THE
PLACEBO GROUP`
var thirdQuestion = `THE CLINICAL TRIAL STUDY DESIGN
ENCOMPASSED 2 PHASES, THE
OPEN-LABEL RUN-IN PHASE AND THE
DOUBLE-BLIND PHASE; WHICH PATIENTS
WERE RANDOMIZED TO THE
DOUBLE-BLIND PHASE?`

var fourthQuestion = `THE PRIMARY AND KEY SECONDARY
ENDPOINTS IN THIS STUDY WERE:`

var answer3A = `PATIENTS ACHIEVING JIA ACR50
OR BETTER`
var answer3B = `PATIENTS ACHIEVING JIA ACR 70`
var answer3C = `PATIENTS ACHIEVING JIA ACR 30
OR BETTER`
var answer3D = `PATIENTS ACHIEVING NO
IMPROVEMENT DURING THE OPEN-LABEL PHASE`

var answer4A = `TIME TO DISEASE FLARE, JIA
ACR30/50/70 RESPONSE
RATES OVER TIME AND MEAN
JADAS27-CRP OVER TIME`
var answer4B = `OCCURRENCE OF DISEASE FLARE
AND TIME TO DISEASE FLARE`
var answer4C = `OCCURRENCE OF DISEASE FLARE, JIA
ACR30/50/70 RESPONSE RATES, AND
CHANGE FROM DB PHASE BASELINE
IN CHAQ-DI`
var answer4D = `NONE OF THE ABOVE`

var currentQuestion = 0;

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
