window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let textOne    = document.querySelector('.slider-text-block1__text1'),
        textTwo    = document.querySelector('.slider-text-block2__text2'),
        textThree  = document.querySelector('.slider-text-block3__text3'),
        textFour   = document.querySelector('.slider-text-block4__text4'),
        slider = document.querySelector('.slider__range'),
        textarea = document.querySelector('.story-form-enter');
        
    /*const initialHeight = 55;

    const resize = () => {
        textarea.style.height = `${initialHeight}px`;
        const height = textarea.scrollHeight;
        textarea.style.height = `${height + initialHeight}`;
    };

    resize();

    textarea.addEventListener('input', resize);*/

    textarea.addEventListener('scroll', function() {
        
    });

    

    textOne.addEventListener('click', function() {        
        slider.value = 0;
    });

    textTwo.addEventListener('click', function() {
        slider.value = 20;
    });

    textThree.addEventListener('click', function() {
        slider.value = 49.5;
    });

    textFour.addEventListener('click', function() {
        slider.value = 100;
    });
});
