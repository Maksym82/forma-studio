const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const swiper = new Swiper(".projects__slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});
