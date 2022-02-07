var incorrectResult = `<i class="fas fa-times"></i>
INCORRECT!`;
var correctResult = `<i class="fas fa-check"></i>
CORRECT!`;

var defaultSubmit = `<i class="fas fa-check"></i>
SUBMIT`;
var correctSubmit = `<i class="fas fa-times"></i>
CLOSE`;
var nextSubmit = `NEXT <i class="fas fa-chevron-right></i>`


var secondQuestion = `THE CLINICAL TRIAL STUDY DESIGN ENCOMPASSED 2 PHASES, THE OPEN-LABEL RUN-IN PHASE AND THE DOUBLE-BLIND PHASE; WHICH PATIENTS WERE RANDOMIZED TO THE DOUBLE-BLIND PHASE?`

var thirdQuestion = `THE PRIMARY AND KEY SECONDARY ENDPOINTS IN THIS STUDY WERE:`

var answer2A = `PATIENTS ACHIEVING JIA ACR50 OR BETTER`
var answer2B = `PATIENTS ACHIEVING JIA ACR 70`
var answer2C = `PATIENTS ACHIEVING JIA ACR 30
OR BETTER`
var answer2D = `PATIENTS ACHIEVING NO IMPROVEMENT DURING THE OPEN-LABEL PHASE`

var answer3A = `TIME TO DISEASE FLARE, JIA ACR30/50/70 RESPONSE RATES OVER TIME AND MEAN JADAS27-CRP OVER TIME`
var answer3B = `OCCURRENCE OF DISEASE FLARE AND TIME TO DISEASE FLARE`
var answer3C = `OCCURRENCE OF DISEASE FLARE, JIA ACR30/50/70 RESPONSE RATES, AND CHANGE FROM DB PHASE BASELINE IN CHAQ-DI`
var answer3D = `NONE OF THE ABOVE`

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

var nextQuestion = () => {
  // Hide result
  document.querySelector('.result').classList.add('hidden');
  // Reset submit button
  document.querySelector('.submit').innerHTML = defaultSubmit;
  document.querySelector('.submit').removeEventListener('click', nextQuestion);
  document.querySelector('.submit').addEventListener('click', checkAnswer);
  if (currentQuestion == 1) {
    // Change modal to second question
    document.querySelector('.modal h4').innerText = secondQuestion;
    // Create two additional buttons, append to dom
    for (let i = 0; i < 2; i++) {
      var button = document.createElement('button')
      button.className = 'modal-btn efficacy';
      button.addEventListener('click', highlightButton)
      document.querySelector('.btn-container').insertAdjacentElement("beforebegin",button);

    }

    var ansArr = [answer2A,answer2B,answer2C,answer2D];
    document.querySelectorAll('.modal-btn').forEach((btn, idx) => {
      btn.innerText = ansArr[idx];
      btn.classList.remove('active');
    })
  }
  else {
    document.querySelector('.modal h4').innerText = thirdQuestion;
    var ansArr = [answer3A,answer3B,answer3C,answer3D];
    document.querySelectorAll('.modal-btn').forEach((btn, idx) => {
      btn.innerText = ansArr[idx];
      btn.classList.remove('active');
    })
  }
}

var checkAnswer = () => {
  if (
    document.querySelector('.modal-btn.active') &&
    document.querySelector('.modal-btn.active').innerText ==
      'TRUE' || document.querySelector('.modal-btn.active').innerText == answer2C || document.querySelector('.modal-btn.active').innerText== answer3C 
  ) {
    currentQuestion++;
    document.querySelector('.result').innerHTML = correctResult;
    document.querySelector('.result').classList.remove('incorrect');
    document.querySelector('.result').classList.remove('hidden');

    document.querySelector('.submit').removeEventListener('click', checkAnswer);
    if (currentQuestion == 3) {
    document.querySelector('.submit').innerHTML = correctSubmit;
    document.querySelector('.submit').addEventListener('click', closeModal);
    }
    else {
      document.querySelector('.submit').addEventListener('click', nextQuestion);
      document.querySelector('.submit').innerHTML = nextSubmit;
    }
  } else { //incorrect answer
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
