const navItem = document.querySelector(".js-nav__item");
const navArrow = navItem.querySelector(".js-nav__icon");
const dropdown = navItem.querySelector(".js-nav__list-list");

navItem.addEventListener("click", (e) => {
  navArrow.classList.toggle("active");
  dropdown.classList.toggle("active");
});
