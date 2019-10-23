$(document).ready(function(){
    
    $('.popup__close').click(function(){
        $('.popup').css('display', 'none');
    });

    $('.menu-close').click(function(){
        $('.menu').css('left', '-505px');
    });
    
    $('.header__menu').click(function(){
        $('.menu').css('left', '0');
    });

    $('.menu-auto').click(function(){
        $('.menu').css('left', '-505px');
    });

});