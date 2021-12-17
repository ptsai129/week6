"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.3,
      spaceBetween: 25
    },
    // when window width is >= 996px
    996: {
      slidesPerView: 2.7,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
