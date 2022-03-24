var modalOpened = false;
$( document ).ready(function() {
var swiper = document.querySelector('.mySwiper').swiper;
swiper.on('slideChange', function () {
    //   $('#ct.container').scrollTop(0);
    if (swiper.activeIndex == 4 && !modalOpened) {
      document.querySelector('.modal.info').classList.toggle('hidden');
      modalOpened = true;
      document.querySelector('.modal.info .submit').addEventListener('click', () => document.querySelector('.modal.info').classList.add('hidden'));
    }
    document.querySelector('.mySwiper').scrollTop=0
    // console.log(document.querySelector('.swiper-slide-active').offsetHeight)
    if (swiper.isEnd)
      document.querySelector('.review-btn').classList.remove('vis-hidden');
    else {
      document.querySelector('.review-btn').classList.add('vis-hidden');
    }
  });
})