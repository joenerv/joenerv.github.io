// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  
  let buttonError = document.querySelector('.js_error_button');
  let closePopupError = document.querySelector('.js_error_popup_close');
  let errorPopap = document.querySelector('.js_error_popup');
  let buttonErrorSent = document.querySelector('.js_error_button_sent');
  let errorPopupContentSent = document.querySelector('.js_error_popup_content_sent');
  let errorPopupContent = document.querySelector('.js_error_popup_content');

  buttonError.addEventListener('click', () => {
    errorPopupContent.classList.add('hide');
    errorPopupContentSent.classList.add('show');
  });

  closePopupError.addEventListener('click', () => {
    errorPopap.classList.add('hide');
  }); 

  buttonErrorSent.addEventListener('click', () => {
    errorPopap.classList.add('hide');
  });

    
});

//шаблон для jQuery(Обработчик готовности дерева DOM)

// $(document).ready(function(){

    
//   });