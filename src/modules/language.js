const tabButtons = document.querySelectorAll(".js-header__lang-item");
tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const activeButtons = document.querySelectorAll(
      ".js-header__lang-item.active"
    );
    activeButtons.forEach((activeButton) => {
      activeButton.classList.remove("active");
    });

    button.classList.add("active");
  });
});
