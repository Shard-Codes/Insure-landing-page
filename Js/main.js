const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle-img"),
  navClose = document.querySelector(".nav__close-img"),
  navToggleBtn = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("open__nav");
  navToggleBtn.setAttribute("aria-expanded", true);
  navToggleBtn.setAttribute("aria-pressed", true);
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("open__nav");
  navToggleBtn.setAttribute("aria-expanded", false);
  navToggleBtn.setAttribute("aria-pressed", false);
});

function scrollHeader() {
  const header = document.querySelector(".header");

  this.scrollY > 50
    ? header.classList.add("sticky__header")
    : header.classList.remove("sticky__header");
  navMenu.classList.remove("open__nav");
}

window.addEventListener("scroll", scrollHeader);
