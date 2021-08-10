//Получение элементов
const burgerBtn = document.querySelector(".header-tablets__menu");
const overlay = document.querySelector(".overlay");
// const html = document.querySelector("html");
// const body = document.body;
const menuList = document.querySelector(".menu__list-mobile");
const socialList = document.querySelector(".social__list-mobile");

//Добавление/удаление overlay по кнопке burger
burgerBtn.addEventListener("click", () => {
  overlay.classList.toggle("overlay-active");
  burgerBtn.classList.toggle("header__tablets__menu-active");
  // body.classList.toggle("position-lock");
  // html.classList.toggle("position-lock");
});

//Добавление слушателя события по родителю
menuList.addEventListener("click", closeOverlay);
socialList.addEventListener("click", closeOverlay);

//Закрытие overlay по клику на overlay
overlay.addEventListener("click", closeOverlay);

//Функци закрытия overlay по нажатию item in BurgerMenu
function closeOverlay() {
  overlay.classList.remove("overlay-active");
  burgerBtn.classList.remove("header__tablets__menu-active");
  // body.classList.remove("position-lock");
  // html.classList.remove("position-lock");
}
