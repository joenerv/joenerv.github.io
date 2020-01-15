let menu = document.querySelectorAll('.menu-item'),
    ul = document.querySelector('.menu'),
    menuFinal = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.getElementById('title'),
    answer = document.getElementById('prompt'),
    adv = document.querySelector('.adv');
    question = prompt('Напишите ваше отношение к технике аррле', 'Мое отношение ');

menu[1].textContent = 'Второй пункт';
menu[2].textContent = 'Третий пункт';
title.textContent = 'Мы продаем только подлинную технику Apple';
body.style.background = 'url(../img/apple_true.jpg)';


answer.textContent = question;
menuFinal.classList.add('menu-item');
menuFinal.textContent = 'Пятый пункт';
ul.append(menuFinal);
adv.remove();


console.log(ul);
