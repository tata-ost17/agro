const btn = document.querySelector(".menu__btn");
const menu = document.querySelector(".mob-menu");

document.querySelector(".menu__btn").addEventListener("click", () => {
  btn.classList.toggle("menu__btn--active");
  menu.classList.toggle("menu--active");
})

window.onscroll = function showHeader() {
  const header = document.querySelector('.header');
  (window.scrollY > 200)? header.classList.add('header__scroll') : header.classList.remove('header__scroll');
}

// window.addEventListener('scroll', e => {
//   const header = document.querySelector('.header');

//   if(scrollTop() > 300) {
//     header.classList.add('header__scroll') 
//    } else {
//     header.classList.add('header__scroll')
//    }
// })

const form = document.forms.form;
const formInput = document.querySelectorAll(".form__input");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

const validateEmail = (email) => {
  let re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};

let element = document.getElementById('form-phone');
let maskOptions = {
        mask: '+{38}(\\000)000-00-00'
    };
    let mask = IMask(element, maskOptions);

// IMask(
//   phone, 
//   {mask: '+{38}(\\000)000-00-00'}
// );
let element = document.getElementById('form-phone');
let maskOptions = {
        mask: '+{38}(\\000)000-00-00'
    };
    let mask = IMask(element, maskOptions);

// IMask(
//   phone, 
//   {mask: '+{38}(\\000)000-00-00'}
// );

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

const swiper = new Swiper('.news__slider', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const mySwiper = new Swiper('.progress__slider', {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

new WOW().init();

new WOW().init();