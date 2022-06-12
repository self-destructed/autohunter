import Swiper, { Autoplay, Navigation } from "swiper";
Swiper.use([Navigation, Autoplay]);

const reviewsCarouselContainer = document.querySelector(
    ".js-reviews-carousel-container"
  ),
  reviewsCarouselMain = reviewsCarouselContainer.querySelector(".js-carousel"),
  reviewsCarouselPrevBtn = reviewsCarouselContainer.querySelector(
    ".js-carousel-button-prev"
  ),
  reviewsCarouselNextBtn = reviewsCarouselContainer.querySelector(
    ".js-carousel-button-next"
  );

const reviewsCarousel = new Swiper(reviewsCarouselMain, {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: reviewsCarouselNextBtn,
    prevEl: reviewsCarouselPrevBtn,
  },
  slidesPerView: 1,
  spaceBetween: 10,
});
