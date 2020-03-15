// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
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