$( document ).ready(function() {
var swiper = document.querySelector('.mySwiper').swiper;
swiper.on('slideChange', function () {
    //   $('#ct.container').scrollTop(0);
    document.querySelector('.mySwiper').scrollTop=0
    // document.querySelector('#efficacy .content').classList.remove('slide1','slide2','slide3','slide4');
    // document.querySelector('#efficacy .content').classList.add('')
    // console.log(document.querySelector('.swiper-slide-active').offsetHeight)
    if (swiper.isEnd)
      document.querySelector('.review-btn').classList.remove('vis-hidden');
    else {
      document.querySelector('.review-btn').classList.add('vis-hidden');
    }
  });
})