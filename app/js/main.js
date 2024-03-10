const btn = document.querySelector(".menu__btn");
const menu = document.querySelector(".mob-menu");

document.querySelector(".menu__btn").addEventListener("click", () => {
  btn.classList.toggle("menu__btn--active");
  menu.classList.toggle("menu--active");
  // menu.classList.toggle("menu--color");
})

const form = document.forms.form;
const formInput = document.querySelectorAll(".form__input");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

const validateEmail = (email) => {
  let re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};

IMask(
  phone, 
  {mask: '+{38}(\\000)000-00-00'}
);

form.addEventListener("submit", function (event) {
  let emailVal = email.value,
    phoneVal = phone.value;

  event.preventDefault();

  formInput.forEach(function (input) {
    (input.value === "")? input.classList.add("error") : input.classList.remove("error");
  });

  (!validateEmail(emailVal))? email.classList.add("error") : email.classList.remove("error");

  // (!validatePhone(phoneVal))? phone.classList.add("error") : phone.classList.remove("error");
});

new WOW().init();

const swiper = new Swiper('.news__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const mySwiper = new Swiper('.progress__slider', {
  loop: true,
  effect: "cards",
  grabCursor: true
});