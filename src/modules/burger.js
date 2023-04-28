const burgerMenu = document.querySelector(".js-header__burger");
const navLinks = document.querySelector(".js-header__wrapper");
const body = document.querySelector(".js-body");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  body.classList.toggle("ovh");
});
