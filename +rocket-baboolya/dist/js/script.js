
window.addEventListener('DOMContentLoaded', function() {

    'use strict';

  // всплывающие окна popup
  let popupСhoiceCity = document.querySelector('.content-title-list__list');
  let popupMetro = document.querySelector('.popup-metro');
  let popupFlat = document.querySelector('.popup-flat');
  let popupPrice = document.querySelector('.popup-price');
  let popupListMetroItem = document.querySelectorAll('.popup-metro-list__item');
  let popupChoiceCityItem = document.querySelectorAll('.content-title-list__item');

  // блок выбора
  let nameCity = document.querySelector('.content-title-list__text');
  let priceWrap = document.getElementById('price-wrap');
  let flatWrap = document.getElementById('flat-wrap');
  let metroWrap = document.getElementById('metro-wrap');
  let nameMetro = document.querySelector('.selectbox-text');

  // input цена
  let inputPriceMin = document.getElementById('input-price-min');
  let inputPriceMax = document.getElementById('input-price-max');

  // выводимое значение цены
  let priceMin = document.querySelector('.selectbox-price__min');
  let priceMax = document.querySelector('.selectbox-price__max');
  
  let popupPriceMinReset = document.querySelector('.popup-price-min__reset');
  let popupPriceMaxReset = document.querySelector('.popup-price-max__reset');

  // чекбоксы количество комнат
  let checkboxFlat = document.querySelectorAll('#flat-checkbox');

  // отображает количество комнат
  let numberRoomsText = document.querySelector('#selectbox-text__text');

  // min/max текст цена для error
  let textPriceErrorMin = document.querySelector('.selectbox-price__min');
  let textPriceErrorMax = document.querySelector('.selectbox-price__max');

  // добавляет комнаты
  popupFlat.addEventListener('input', () => {

    let arr = [];

    checkboxFlat.forEach(function(entry) {
      if (entry.checked) {
        arr.push(entry.value);
      }
    });
  
    let i = arr.join(', ');
  
    // console.log(i);
    numberRoomsText.textContent = i; 
    
  });
  
  // открытие/закрытие поля выбора метро
  metroWrap.addEventListener('click', function() {

    popupFlat.classList.remove('show');
    flatWrap.classList.remove('selectbox-wrap__open');
    popupPrice.classList.remove('show');
    priceWrap.classList.remove('selectbox-wrap__open');

    if (popupMetro.classList.contains('show')) {
      popupMetro.classList.remove('show');
      metroWrap.classList.remove('selectbox-wrap__open');
    } else {
    popupMetro.classList.add('show');
    metroWrap.classList.add('selectbox-wrap__open');
    }
  });

   // выбор станции метро
   popupListMetroItem.forEach(elem => {
    elem.addEventListener('click', () => {
      nameMetro.textContent = elem.textContent;
      popupMetro.classList.remove('show');
    });
  })

  // открытие/закрытие поля выбора количества комнат
  flatWrap.addEventListener('click', function() {

    popupMetro.classList.remove('show');
    metroWrap.classList.remove('selectbox-wrap__open');
    popupPrice.classList.remove('show');
    priceWrap.classList.remove('selectbox-wrap__open');

    if(popupFlat.classList.contains('show')) {
      popupFlat.classList.remove('show');
      flatWrap.classList.remove('selectbox-wrap__open');
    } else {
      popupFlat.classList.add('show');
      flatWrap.classList.add('selectbox-wrap__open');      
    }
        
  });

  // открытие/закрытие поля выбора стоимости
  priceWrap.addEventListener('click', function() {
    
    popupFlat.classList.remove('show');
    flatWrap.classList.remove('selectbox-wrap__open');
    popupMetro.classList.remove('show');
    metroWrap.classList.remove('selectbox-wrap__open');

    if(popupPrice.classList.contains('show')) {
      popupPrice.classList.remove('show');
      priceWrap.classList.remove('selectbox-wrap__open');
      
    } else {
      popupPrice.classList.add('show');
      priceWrap.classList.add('selectbox-wrap__open');
    }

  });


  // открытие/закрытие поля выбора города
  nameCity.addEventListener('click', () => {

    if(popupСhoiceCity.classList.contains('show')) {
      popupСhoiceCity.classList.remove('show');
    } else {
      popupСhoiceCity.classList.add('show');
    }
  });


  // ф-я выбора города
  
  popupChoiceCityItem.forEach(elem => {
    elem.addEventListener('click', () => {
      nameCity.textContent = elem.textContent;
      popupСhoiceCity.classList.remove('show');
    });
  })

  // ф-ия удаляет введеную стоимость в полях ввода
  popupPriceMinReset.addEventListener('click', function() {
    inputPriceMin.placeholder = "";
    inputPriceMin.value = "";

  });

  popupPriceMaxReset.addEventListener('click', function() {
    inputPriceMax.placeholder = "";
    inputPriceMax.value = "";

  });


  // ф-ия добавляет введеное значение в поле минимальная стоимость
  inputPriceMin.addEventListener('change', () => {
    
    priceMin.textContent = inputPriceMin.value;
  });  


  // добавляет значение в максимальную стоимость + выдает ошибку, если минимальная больше максимальной
  inputPriceMax.addEventListener('change', () => {

    priceMax.textContent = prettify(inputPriceMax.value);

    if (inputPriceMin.value > inputPriceMax.value) {
      inputPriceMin.classList.add('error');
      inputPriceMax.classList.add('error');
      textPriceErrorMin.classList.add('error');
      textPriceErrorMax.classList.add('error');
    } 
  });
  

  // ф-я разделения чисел
  function prettify(num) {
    var n = num.toString();
    
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');

  }
});
