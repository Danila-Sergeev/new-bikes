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


 

  