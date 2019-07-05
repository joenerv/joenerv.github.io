window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let arrowOne   = document.querySelector('.slider-text-block1__arrow1'),
        arrowTwo   = document.querySelector('.slider-text-block2__arrow2'),
        arrowThree = document.querySelector('.slider-text-block3__arrow3'),
        arrowFour  = document.querySelector('.slider-text-block4__arrow4'),
        textOne    = document.querySelector('.slider-text-block1__text1'),
        textTwo    = document.querySelector('.slider-text-block2__text2'),
        textThree  = document.querySelector('.slider-text-block3__text3'),
        textFour   = document.querySelector('.slider-text-block4__text4'),
        block      = document.querySelector('.slider-text'),
        arrowAll   = block.getElementsByTagName('img');


    textOne.addEventListener('click', function() {
        
        for(let i=0; i < arrowAll.length; i = i + 1) {
            arrowAll[i].style.display = "none";
        }
        arrowOne.style.display = 'block';
    });

    textTwo.addEventListener('click', function() {
        for(let i=0; i < arrowAll.length; i = i + 1) {
            arrowAll[i].style.display = "none";
        }
        arrowTwo.style.display = 'block';
    });

    textThree.addEventListener('click', function() {
        for(let i=0; i < arrowAll.length; i = i + 1) {
            arrowAll[i].style.display = "none";
        }
        arrowThree.style.display = 'block';
    });

    textFour.addEventListener('click', function() {
        for(let i=0; i < arrowAll.length; i = i + 1) {
            arrowAll[i].style.display = "none";
        }
        arrowFour.style.display = 'block';
    });
});
