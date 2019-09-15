window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let close          = document.querySelector('.menu-mobile-header__close'),
        menuLinkMobile = document.querySelector('.menu-link'),
        menuAbout      = document.querySelector('.menu-mobile-item__about'),
        menuLocation   = document.querySelector('.menu-mobile-item__location'),
        menuService    = document.querySelector('.menu-mobile-item__service'),
        menuBlog       = document.querySelector('.menu-mobile-item__blog'),
        menuContact    = document.querySelector('.menu-mobile-item__contact'),
        menuBecome     = document.querySelector('.menu-mobile-item__become'),
        menuLogin      = document.querySelector('.menu-mobile-item__login'),
        menu           = document.querySelector('.menu-mobile'),
        buttonScroll   = document.querySelector('.page-button__bottom'),
        funcClose      = () => menu.style.top = '-550' + 'px';


    menuLinkMobile.addEventListener('click', () => menu.style.top = '0');

    close.addEventListener('click', funcClose);
    menuAbout.addEventListener('click', funcClose);
    menuLocation.addEventListener('click', funcClose);
    menuService.addEventListener('click', funcClose);
    menuBlog.addEventListener('click', funcClose);
    menuContact.addEventListener('click', funcClose);
    menuBecome.addEventListener('click', funcClose);
    menuLogin.addEventListener('click', funcClose);


});
