
//Получение элементов
const burgerBtn = document.querySelector('.header-tablets__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;
const menuMain = document.querySelector('.menu__list-mobile > .menu__item');
const menuItem = document.querySelectorAll('.menu__list-mobile > .menu__item');

//Добавление/удаление overlay по кнопке burger
burgerBtn.addEventListener('click',() => {
  overlay.classList.toggle('overlay-active');
  burgerBtn.classList.toggle('header__tablets__menu-active');
  body.classList.toggle("body-active");
});

//Перебор item in BurgerMenu
menuItem.forEach(item => {
  item.addEventListener('click', closeOverlay);
});

//Функци закрытия overlay по нажатию item in BurgerMenu
function closeOverlay(){
  overlay.classList.remove('overlay-active')
  burgerBtn.classList.remove('header__tablets__menu-active');
  body.classList.remove("body-active");
}