import Swiper, { Autoplay, Navigation } from "swiper";
Swiper.use([Navigation, Autoplay]);

const autoCarouselContainer = document.querySelector(
    ".js-auto-carousel-container"
  ),
  autoCarouselMain = autoCarouselContainer.querySelector(".js-swiper"),
  autoCarouselPrevBtn = autoCarouselContainer.querySelector(
    ".js-carousel-button-prev"
  ),
  autoCarouselNextBtn = autoCarouselContainer.querySelector(
    ".js-carousel-button-next"
  );

const autoCarousel = new Swiper(autoCarouselMain, {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: autoCarouselNextBtn,
    prevEl: autoCarouselPrevBtn,
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
