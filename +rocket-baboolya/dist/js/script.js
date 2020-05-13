// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';


  let metroWrap = document.getElementById('metro-wrap');
  let flatWrap = document.getElementById('flat-wrap');
  let priceWrap = document.getElementById('price-wrap');
  let popupMetro = document.querySelector('.popup-metro');
  let popupFlat = document.querySelector('.popup-flat');
  let popupPrice = document.querySelector('.popup-price');
  let priceMin = document.querySelector('.selectbox-price__min');
  let priceMax = document.querySelector('.selectbox-price__max');
  let inputPriceMin = document.getElementById('input-price-min');
  let inputPriceMax = document.getElementById('input-price-max');
  let popupPriceMinReset = document.querySelector('.popup-price-min__reset');
  let popupPriceMaxReset = document.querySelector('.popup-price-max__reset');
  let popupListMetroItem = document.querySelector('.popup-metro-list__item');

  
  
  // открытие/закрытие полей выбора

  metroWrap.addEventListener('click', function() {

    if (popupMetro.style.display == 'none') {
      popupMetro.style.display = 'inline-block';
      metroWrap.classList.add('selectbox-wrap__open');
    } else {
      popupMetro.style.display = 'none';
      metroWrap.classList.remove('selectbox-wrap__open');
    }
    

  });

  flatWrap.addEventListener('click', function() {

    if (popupFlat.style.display == 'none') {
      popupFlat.style.display = 'inline-block';
      flatWrap.classList.add('selectbox-wrap__open');
    } else {
      popupFlat.style.display = 'none';
      flatWrap.classList.remove('selectbox-wrap__open');
    }

    
  });

  priceWrap.addEventListener('click', function() {
    // popupPrice.style.display = 'inline-block';
    // priceWrap.classList.add('selectbox-wrap__open');

      priceWrap.classList.add('selectbox-wrap__open')
    if (popupPrice.style.display == 'none') {
      popupPrice.style.display = 'inline-block';
      priceWrap.classList.add('selectbox-wrap__open');
    } else {
      popupPrice.style.display = 'none';
      priceWrap.classList.remove('selectbox-wrap__open');
    }
    
  });


  // ф-ия удаляет введеную стоимость в полях ввода
  popupPriceMinReset.addEventListener('click', function() {
    inputPriceMin.placeholder = "";
    inputPriceMin.value = "";

  });

  popupPriceMaxReset.addEventListener('click', function() {
    inputPriceMax.placeholder = "";
    inputPriceMax.value = "";

  });

  // ф-ия добавляет введеное значение в поле
  
  inputPriceMin.addEventListener('change', () => {
    priceMin.textContent = prettify(inputPriceMin.value);

  });  


  inputPriceMax.addEventListener('change', () => {
    priceMax.textContent = prettify(inputPriceMax.value);

  });

  // ф-я разделения чисел
  function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

  // swiper
  var mySwiper = new Swiper ('.mobile-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 10,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }


  })

});

//шаблон для jQuery(Обработчик готовности дерева DOM)

$(document).ready(function(){
  
  $(function() {
    $('select').selectric();
  });
    
    
  });