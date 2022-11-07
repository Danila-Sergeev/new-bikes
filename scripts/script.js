let SwitchBtn =  document.querySelector('.footer__switch-btn');
let formButton = document.querySelector('.footer__form-button');
let form = document.querySelector('.footer__form');
let footer = document.querySelector('.footer');

  SwitchBtn.addEventListener('click', () => {
    SwitchBtn.classList.toggle('footer__switch-on');
  });
  form.addEventListener('mouseover', () => {
    formButton.classList.add('footer__form-button_on');
  });
  form.addEventListener('click', () => {
    formButton.classList.add('footer__form-button_on');
  });
  formButton.addEventListener('mouseover', () => {
    formButton.classList.add('footer__form-button_on');
  });
  form.addEventListener('mouseleave', () => {
    formButton.classList.remove('footer__form-button_on');
  });
/*   footer.addEventListener('click', () => {
    formButton.classList.remove('footer__form-button_on');
  }); */


let bikesBtn = document.querySelector(".bikes__button");
let bikesLink = document.querySelector(".bikes__links");
let bikesL1 = document.querySelector('#link1');
let bikesL2 = document.querySelector('#link2');
let bikesL3 = document.querySelector('#link3');
let bikesItem = document.querySelector('.bikes__item');
let bikesIcon = document.querySelector('.bikes__icon');
let bikesCont = document.querySelector('.bikes__img-cont');
let sliderMiniFst = document.querySelector('#slider_1')
let sliderMiniSnd = document.querySelector('#slider_2')
let sliderMiniThd = document.querySelector('#slider_3')

bikesBtn.addEventListener('click', () =>{
  bikesLink.classList.toggle('bikes__links_open')
})
bikesL1.addEventListener('click', () => {
  sliderMiniFst.classList.remove('bikes__slider_active');
  sliderMiniSnd.classList.add('bikes__slider_active');
  sliderMiniThd.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open')
})
bikesL2.addEventListener('click', () => {
  sliderMiniSnd.classList.remove('bikes__slider_active');
  sliderMiniFst.classList.add('bikes__slider_active');
  sliderMiniThd.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open')
})
bikesL3.addEventListener('click', () => {
  sliderMiniThd.classList.remove('bikes__slider_active');
  sliderMiniSnd.classList.add('bikes__slider_active');
  sliderMiniFst.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open')
})