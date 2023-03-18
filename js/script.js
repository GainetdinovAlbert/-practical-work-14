let Burger = document.querySelector('.header__burger');
let burgerLine1 = document.getElementById('burger-line-1');
let burgerLine2 = document.getElementById('burger-line-2');
let burgerLine3 = document.getElementById('burger-line-3');
let headerAside = document.querySelector('.header__aside');
Burger.addEventListener('click', () => {

  if (Burger.classList.contains('header__burger-active')) {
    Burger.classList.remove('header__burger-active');
    burgerLine1.classList.remove('header__burger-line1-edited');
    burgerLine2.classList.remove('header__burger-line2-edited');
    burgerLine3.classList.remove('header__burger-line3-edited');
    headerAside.classList.remove('header__aside-active')
  } else {
    Burger.classList.add('header__burger-active');
    burgerLine1.classList.add('header__burger-line1-edited');
    burgerLine2.classList.add('header__burger-line2-edited');
    burgerLine3.classList.add('header__burger-line3-edited');
    headerAside.classList.add('header__aside-active');
  }
});

let HeaderBlockSearch = document.querySelector('.header__block-search');
let ButtonOpen = document.querySelector('.header__picture-search-wrapper');
let HeaderBlockSearchText = document.querySelector('.header__block-search-text');
let HeaderButtonClose = document.querySelector('.header__block-search-close-wrapper');
ButtonOpen.addEventListener('click', () => {
  HeaderBlockSearchText.classList.add('header__block-search-text-active')
  HeaderBlockSearch.classList.add('header__block-search-style')
  HeaderButtonClose.classList.add('header__block-search-close-wrapper-active')
});

HeaderButtonClose.addEventListener('click', () => {
  HeaderBlockSearchText.classList.remove('header__block-search-text-active')
  HeaderBlockSearch.classList.remove('header__block-search-style')
  HeaderButtonClose.classList.remove('header__block-search-close-wrapper-active')
});

let methodsItemNav = document.querySelectorAll('.working-methods__item');
let workingMethodsTab = document.querySelectorAll('.working-methods__tab');
let workingMethodsPictureContent = document.querySelectorAll('.working-methods__picture-content');
methodsItemNav.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    methodsItemNav.forEach(function(btn){btn.classList.remove('working-methods__item-active')});
    e.currentTarget.classList.add('working-methods__item-active');

    workingMethodsTab.forEach(function(element){ element.classList.remove('working-methods__tab-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('working-methods__tab-active');
  });

});

var b = document.querySelector(".swiper-pagination-bullet-active");

b.setAttribute("role", "button");
b.setAttribute("aria-label", "слайдера");
b.setAttribute("tabindex", "12");



let questionAnswer = document.querySelectorAll('.questions__answer');
let questionsAccordionItem =document.querySelectorAll('.questions__accordion-item');

new Accordion('.questions__accordion', {
  elementClass:'questions__accordion-item',
  triggerClass:'questions__item',
  panelClass:'questions__answer',
  activeClass:'questions__answer-active',
});
