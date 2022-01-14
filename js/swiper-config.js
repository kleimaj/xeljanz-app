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