// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let card = document.querySelectorAll('.card');
    let pay = document.querySelectorAll('.card-footer__pay');


    // выбор пачки  при нажатии на "купи"
    let a = Array.from(pay);

    a.forEach(elem => {

      elem.addEventListener('click', () => {
        let b = a.indexOf(elem);
        card[b].classList.add('selected');
      })
    })

    // выбор пачки при нажатии на пачку
    card.forEach(elem => {

      elem.addEventListener('click', () => {        
        if (elem.classList.contains('selected')) {
          elem.addEventListener('mouseleave', () => {            
            elem.classList.remove('selected');
          });

        } else if (elem.classList.contains('disabled')) {
          elem.addEventListener('mouseleave', () => {            
            elem.classList.remove('selected');
          });
        } else {

          elem.addEventListener('mouseleave', () => {
            elem.classList.add('selected');
          });
        }
        
      });
    })
    


    // двойной клик (пачка недоступна)

    card.forEach(elem => {

      elem.addEventListener('dblclick', () => {
        if (elem.classList.contains('disabled')) {
          elem.classList.remove('disabled');
        } else {
          
          elem.addEventListener('mouseleave', () => {            
            elem.classList.remove('selected');
          });
          elem.classList.add('disabled');
        }
      });
    })
    
});