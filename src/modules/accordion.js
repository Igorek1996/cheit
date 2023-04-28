const accordionItems = document.querySelectorAll(".js-accordion__item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".js-accordion__item-title");
  const content = item.querySelector(".js-accordion__item-content");
  if (item.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  header.addEventListener("click", () => {
    item.classList.toggle("active");

    const contentHeight = content.scrollHeight;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = contentHeight + "px";
    }
  });
});
