let menu = document.querySelectorAll('.menu-item'),
    menuFinal = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.getElementById('title'),
    answer = document.getElementById('prompt'),
    adv = document.querySelector('.adv');
    // question = prompt('Напишите ваше отношение к технике аррле', 'Мое отношение ');

menu[1].textContent = 'Второй пункт';
menu[2].textContent = 'Третий пункт';
title.textContent = 'Мы продаем только подлинную технику Apple';
body.style.background = 'url(../img/apple_true.jpg)';
// document.removeChild(adv);

// answer.textContent = question;
menuFinal.classList.add('menu-item');
menuFinal.textContent = 'Пятый пункт';
document.ul.append(menuFinal);

console.log(adv);
