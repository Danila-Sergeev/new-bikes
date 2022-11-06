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
let bikesItem = document.querySelector('.bikes__item');
let bikesIcon = document.querySelector('.bikes__icon');
let bikesCont = document.querySelector('.bikes__img-cont');

bikesBtn.addEventListener('click', () =>{
  bikesLink.classList.toggle('bikes__links_open')
})
bikesL1.addEventListener('click', () => {
  bikesItem.classList.remove('slider__item');
  bikesIcon.classList.add('slider__items');
})