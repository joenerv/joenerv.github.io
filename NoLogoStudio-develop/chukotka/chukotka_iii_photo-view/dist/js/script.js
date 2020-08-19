// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  
  let photoViewClose = document.querySelector('.js_photo_view_close');
  let photoViewPopup = document.querySelector('.js_photo_view_popup');


  // закрыввает просмотр фото при клике на крестик
  photoViewClose.addEventListener('click', () => {
    photoViewPopup.classList.add('hide');
  });

  // swiper
  var photoViewSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 75,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

    
});

//шаблон для jQuery(Обработчик готовности дерева DOM)

// $(document).ready(function(){

    
//   });