var toggle = true;
var labels = document.querySelectorAll('.toggle-group h5');
var img = document.querySelector('.toggle-img')
document.querySelector('input').addEventListener('click', () => {
    labels[0].classList.toggle('active');
    labels[1].classList.toggle('active');
    if (toggle) {
        toggle = false;
        img.src = 'assets/safety/placebo.png'
    }
    else {
        toggle = true;
        img.src = 'assets/safety/tofacitinib.png'
    }
})