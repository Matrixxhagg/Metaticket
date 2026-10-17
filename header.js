const nav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  if (nav.classList.contains("nav--open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
