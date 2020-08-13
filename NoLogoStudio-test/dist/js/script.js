// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let menuItem = document.querySelectorAll('.menu-item');
    let menuSubmenu = document.querySelector('.menu-submenu');
    let submenuItem = document.querySelectorAll('.submenu-item');
    let submenuFood = document.querySelector('.submenu-food');
    let submenuGas = document.querySelector('.submenu-gas');
    let submenuChemistry = document.querySelector('.submenu-chemistry');


    // увеличение ширины подменю при наведении
    
    submenuChemistry.addEventListener('mouseover', () => {
      submenuChemistry.style.width = '340' + 'px';
    })

    submenuChemistry.addEventListener('mouseout', () => {
      submenuChemistry.style.width = '140' + 'px';
    })

    // клик на меню второго порядка
    let a = Array.from(submenuItem);

    a.forEach(elem => {

      elem.addEventListener('click', () => {
        let b = a.indexOf(elem);
        
        if (b == 0) {
          submenuFood.classList.toggle('show-submenu');
          submenuGas.classList.remove('show-submenu');
          submenuChemistry.classList.remove('show-submenu');
        } else if (b == 1) {
          submenuGas.classList.toggle('show-submenu');
          submenuFood.classList.remove('show-submenu');
          submenuChemistry.classList.remove('show-submenu');
        } else if (b == 2) {
          submenuChemistry.classList.toggle('show-submenu');
          submenuFood.classList.remove('show-submenu');
          submenuGas.classList.remove('show-submenu');
        }
      });
    })

    // клик на меню первого порядка

    menuItem.forEach(elem => {

      elem.addEventListener('click', () => {

        submenuFood.classList.remove('show-submenu');
        submenuGas.classList.remove('show-submenu');
        submenuChemistry.classList.remove('show-submenu');



        if (elem.classList.contains('menu-active')) {

          elem.classList.remove('menu-active');
          menuSubmenu.classList.remove('show');

        } else {
          
          menuItem.forEach(elem => {
            elem.classList.remove('menu-active');
          })
          elem.classList.add('menu-active');
          menuSubmenu.classList.add('show');

        }
      })
    })
    
});

//шаблон для jQuery(Обработчик готовности дерева DOM)

$(document).ready(function(){

  $('ul.menu.flex').flexMenu({
    linkText: '...',
    cutoff: 0
  });

});