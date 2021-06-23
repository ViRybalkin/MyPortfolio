const burgerBtn = document.querySelector('.header-tablets__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;


burgerBtn.addEventListener('click',() => {
  overlay.classList.toggle('overlay-active');
  burgerBtn.classList.toggle('header__tablets__menu-active');
  body.classList.toggle("body-active")
})