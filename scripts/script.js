const SwitchBtn =  document.querySelector('#footer__switch-btn');
const SwitchBtnHeader =  document.querySelector('#header__switch-btn');
const page = document.querySelector(".page__padding");
const pagePadding = document.querySelector(".page");
const body = document.querySelector(".body");
const formButton = document.querySelector('.footer__form-button');
const form = document.querySelector('.footer__form');
const footer = document.querySelector('.footer');
const bikesBtn = document.querySelector(".bikes__button");
const bikesBtnArrow = document.querySelector(".bikes__arrow");
const bikesLink = document.querySelector(".bikes__links");
const bikesL1 = document.querySelector('#link1');
const bikesL2 = document.querySelector('#link2');
const bikesL3 = document.querySelector('#link3');
const bikesItem = document.querySelector('.bikes__item');
const bikesIcon = document.querySelector('.bikes__icon');
const bikesCont = document.querySelector('.bikes__img-cont');
const sliderMiniFst = document.querySelector('#slider_1')
const sliderMiniSnd = document.querySelector('#slider_2')
const sliderMiniThd = document.querySelector('#slider_3')
const menuBurger = document.querySelector(".header__burger-menu");
const menuMain = document.querySelector(".header__menu-сontainer");
const buttonClose = document.querySelector(".header__button-close");
const buttonArrow = document.querySelector(".header__button-arrow");
const content = document.querySelector(".content");
const sliderArrow = document.querySelector(".bikes__arrow");
const humbLinkF = document.querySelector("#header__link-item1");
const humbLinkS = document.querySelector("#header__link-item2");
const humbLinkT = document.querySelector("#header__link-item3");

  SwitchBtn.addEventListener('click', () => {
    SwitchBtn.classList.toggle('footer__switch-on');
    page.classList.toggle('black-theme');
    pagePadding.classList.toggle('black-theme');
    body.classList.toggle('black-theme');
    footer.classList.toggle('footer_darck');

  });
  SwitchBtnHeader.addEventListener('click', () => {
    SwitchBtnHeader.classList.toggle('footer__switch-on');
    page.classList.toggle('black-theme');
    pagePadding.classList.toggle('black-theme');
    body.classList.toggle('black-theme');
    footer.classList.toggle('footer_darck');
    menuMain.classList.toggle('black-theme');
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


bikesBtn.addEventListener('click', () =>{
  bikesLink.classList.toggle('bikes__links_open');
  sliderArrow.classList.toggle('bikes__arrow_open');
})
bikesBtnArrow.addEventListener('click', () =>{
  bikesLink.classList.toggle('bikes__links_open');
  sliderArrow.classList.toggle('bikes__arrow_open');
})
bikesL1.addEventListener('click', () => {
  sliderMiniFst.classList.remove('bikes__slider_active');
  sliderMiniSnd.classList.add('bikes__slider_active');
  sliderMiniThd.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open');
  bikesBtn.textContent = bikesL1.textContent;
  sliderArrow.classList.toggle('bikes__arrow_open');
})
bikesL2.addEventListener('click', () => {
  sliderMiniSnd.classList.remove('bikes__slider_active');
  sliderMiniFst.classList.add('bikes__slider_active');
  sliderMiniThd.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open')
  bikesBtn.textContent = bikesL2.textContent;
  sliderArrow.classList.toggle('bikes__arrow_open');
})
bikesL3.addEventListener('click', () => {
  sliderMiniThd.classList.remove('bikes__slider_active');
  sliderMiniSnd.classList.add('bikes__slider_active');
  sliderMiniFst.classList.add('bikes__slider_active');
  bikesLink.classList.toggle('bikes__links_open')
  bikesBtn.textContent = bikesL3.textContent;
  sliderArrow.classList.toggle('bikes__arrow_open');
})

if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    menuMain.classList.add("header__burger-menu_active");
    buttonClose.classList.add("header__buttons_active");
    content.classList.add("content_none");
  });
}

function closeMenuBurger(menuBurger) {
  menuBurger.classList.remove("header__burger-menu_active");
  buttonClose.classList.remove("header__buttons_active");
  content.classList.remove("content_none");
}

buttonClose.addEventListener("click", function (e) {
  closeMenuBurger(menuMain);
});

humbLinkF.addEventListener('click', function (e) {
  closeMenuBurger(menuMain);
});
humbLinkS.addEventListener('click', function (e) {
  closeMenuBurger(menuMain);
});
humbLinkT.addEventListener('click', function (e) {
  closeMenuBurger(menuMain);
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
