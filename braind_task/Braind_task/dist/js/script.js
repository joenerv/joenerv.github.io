window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  // открытие комментария
  let dots = document.getElementById('dots');
  let more = document.getElementById('more');
  let detail = document.querySelector('.detail');
  let hide = document.querySelector('.hide');

  detail.addEventListener('click', function () {

      dots.style.display = 'none';
      detail.style.display = 'none';
      more.style.display = 'inline';
      hide.style.display = 'inline';

  });

  hide.addEventListener('click', function () {

    dots.style.display = 'inline';
    detail.style.display = 'inline';
    more.style.display = 'none';
    hide.style.display = 'none';

  });

    // открытие комментария mobile
    let dotsMobile = document.getElementById('dots-mobile');
    let moreMobile = document.getElementById('more-mobile');
    let detailMobile = document.querySelector('.detail-mobile');
    let hideMobile = document.querySelector('.hide-mobile');
  
    detailMobile.addEventListener('click', function () {
  
        dotsMobile.style.display = 'none';
        detailMobile.style.display = 'none';
        moreMobile.style.display = 'inline';
        hideMobile.style.display = 'inline';
  
    });
  
    hideMobile.addEventListener('click', function () {
  
      dotsMobile.style.display = 'inline';
      detailMobile.style.display = 'inline';
      moreMobile.style.display = 'none';
      hideMobile.style.display = 'none';
  
    });

  // открытие popupOne
  let imgOne = document.querySelector('.additional-comment-img__one')
  let popupOne = document.querySelector('.popup-img-one');
  let popupOneClose = document.querySelector('.popup-img-one__close');
  let popupOneImg = document.querySelector('.popup-img-one__img');


  imgOne.addEventListener('click', () => {
    popupOne.style.display = 'inline';
  });  
  popupOneClose.addEventListener('click', () => {
    popupOne.style.display = 'none';
  });
  popupOneImg.addEventListener('click', () => {
    popupOne.style.display = 'none';
  });

    // открытие popupTwo
  let imgTwo = document.querySelector('.additional-comment-img__two')
  let popupTwo = document.querySelector('.popup-img-two');
  let popupTwoClose = document.querySelector('.popup-img-two__close');
  let popupTwoImg = document.querySelector('.popup-img-two__img');

  imgTwo.addEventListener('click', () => {
    popupTwo.style.display = 'inline';
  });  
  popupTwoClose.addEventListener('click', () => {
    popupTwo.style.display = 'none';
  });
  popupTwoImg.addEventListener('click', () => {
    popupTwo.style.display = 'none';
  });

  // открытие popupOne mobile
  let imgOneMobile = document.querySelector('.mobile-comment-img__one')
  let popupOneMobile = document.querySelector('.popup-mobile-one');
  let popupOneCloseMobile = document.querySelector('.popup-mobile-one__close');
  let popupOneImgMobile = document.querySelector('.popup-mobile-one__img');


  imgOneMobile.addEventListener('click', () => {
    popupOneMobile.style.display = 'inline';
  });  
  popupOneCloseMobile.addEventListener('click', () => {
    popupOneMobile.style.display = 'none';
  });
  popupOneImgMobile.addEventListener('click', () => {
    popupOneMobile.style.display = 'none';
  });

  // открытие popupTwo mobile
  let imgTwoMobile = document.querySelector('.mobile-comment-img__two')
  let popupTwoMobile = document.querySelector('.popup-mobile-two');
  let popupTwoCloseMobile = document.querySelector('.popup-mobile-two__close');
  let popupTwoImgMobile = document.querySelector('.popup-mobile-two__img');


  imgTwoMobile.addEventListener('click', () => {
    popupTwoMobile.style.display = 'inline';
  });  
  popupTwoCloseMobile.addEventListener('click', () => {
    popupTwoMobile.style.display = 'none';
  });
  popupTwoImgMobile.addEventListener('click', () => {
    popupTwoMobile.style.display = 'none';
  });
    
    
});
