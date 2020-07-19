// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let info = document.querySelector('.content-card__info');
    let hint = document.querySelector('.content-card__hint');
    let headerButton = document.querySelector('.header-button');
    let popup = document.querySelector('.popup');
    let popupProgram = document.querySelector('.popup-program');
    let popupProgramClose = document.querySelector('.popup-program__close');
    let popupProgramButton = document.querySelector('.popup-program__button');
    let popupCheck = document.querySelector('.popup-check');
    let popupCheckClose = document.querySelector('.popup-check__close');
    let contentBtton = document.querySelector('.content-button');
    let parallaxLeft = document.querySelector('.content-parallax__left');
    let parallaxRight = document.querySelector('.content-parallax__right');


    // парраллакс эффект
    window.addEventListener('mousemove', function(e) {

      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
      parallaxLeft.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      parallaxRight.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });


    // кнопка записаться онлайн
    headerButton.addEventListener('click', ()=> {

      popup.classList.remove('hide');
      popupProgram.classList.add('show');

    });

    // закрытие popup окна при нажатии на "закрыть"
    popupProgramClose.addEventListener('click', ()=> {

      popup.classList.add('hide');
    });

    // нажатие на "получить программу"
    popupProgramButton.addEventListener('click', () => {

      popupProgram.classList.remove('show');
      popupCheck.classList.add('show');
    });

    // нажатие на "закрыть" второе окно
    popupCheckClose.addEventListener('click', () => {

      popup.classList.add('hide');
      popupCheck.classList.remove('show');
    });

    // нажатие на второе окно
    popupCheck.addEventListener('click', () => {

      popup.classList.add('hide');
      popupCheck.classList.remove('show');
    });

    // кнопка "получить карту бесплатно"
    contentBtton.addEventListener('click', () => {

      popup.classList.remove('hide');
      popupProgram.classList.add('show');
    });

    // показывает информацию
    info.addEventListener('click', () => {

      hint.classList.toggle('show');
    });

    hint.addEventListener('click', () => {
      
      hint.classList.remove('show');
    });
    
});

//шаблон для jQuery(Обработчик готовности дерева DOM)

$(document).ready(function(){

    
  });