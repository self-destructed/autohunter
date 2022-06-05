import Swiper, { Autoplay, Navigation } from "swiper";
Swiper.use([Navigation, Autoplay]);

const autoSwiper = document.querySelector(".js-auto-swiper");

const autoCarousel = new Swiper(autoSwiper, {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".js-auto-swiper-button-next",
    prevEl: ".js-auto-swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
