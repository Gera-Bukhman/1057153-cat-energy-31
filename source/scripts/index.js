const navToggle = document.querySelector('.main-nav__toggle');
console.log(navToggle);
const mainNav = document.querySelector('.main-nav');
console.log(mainNav);

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
  console.log('шок оно работает');
});
