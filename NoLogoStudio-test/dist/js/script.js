// шаблон для js(Обработчик готовности дерева DOM)

window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
});

//шаблон для jQuery(Обработчик готовности дерева DOM)

$(document).ready(function(){

  $('ul.menu.flex').flexMenu({
    linkText: '',
    cutoff: 0
  });

});