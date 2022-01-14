let swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
          return `<span class="` + className + `"></span>`;
      }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
  });
swiper.on('slideChange', function () {
    if (swiper.isEnd)
    document.querySelector('.review-btn').classList.remove('hidden')
    else {
        document.querySelector('.review-btn').classList.add('hidden');
    }
});