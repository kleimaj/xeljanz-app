const incorrectResult = `<i class="fas fa-times"></i>
INCORRECT!`
const correctResult = `<i class="fas fa-check"></i>
CORRECT!`

const defaultSubmit = `<i class="fas fa-check"></i>
SUBMIT`
const correctSubmit = `<i class="fas fa-times"></i>
CLOSE`

document.querySelector('.review-btn').addEventListener('click', ()=> {
    document.querySelector('.modal').classList.remove('hidden')
    
})

const highlightButton = (e) => {
    document.querySelectorAll('.modal-btn').forEach((btn) => btn.classList.remove('active'));
    document.querySelector('.result').classList.add('hidden');
    e.target.classList.add('active');
}

const closeModal = () => {
    // Reset modal properties
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.result').classList.add('hidden');
    document.querySelectorAll('.modal-btn').forEach((btn) => btn.classList.remove('active'));
    document.querySelector('.submit').innerHTML = defaultSubmit;
    document.querySelector('.submit').removeEventListener('click', closeModal);
    document.querySelector('.submit').addEventListener('click', checkAnswer)
}

const checkAnswer = () => {
    if (document.querySelector('.modal-btn.active') && document.querySelector('.modal-btn.active').innerText == 'JAK1/JAK2, JAK1/JAK3, AND JAK2/JAK2') {
        document.querySelector('.result').innerHTML = correctResult;
        document.querySelector('.result').classList.remove('incorrect');
        document.querySelector('.result').classList.remove('hidden');

        document.querySelector('.submit').innerHTML = correctSubmit;
        document.querySelector('.submit').removeEventListener('click', checkAnswer);
        document.querySelector('.submit').addEventListener('click', closeModal);
    }
    else {
        document.querySelector('.result').innerHTML = incorrectResult;
        document.querySelector('.result').classList.remove('hidden');
        document.querySelector('.result').classList.add('incorrect');
    }
}

document.querySelectorAll('.modal-btn').forEach((btn)=> btn.addEventListener('click', highlightButton));

document.querySelector('.submit').addEventListener('click', checkAnswer)
document.querySelector('.close-btn').addEventListener('click', closeModal);