window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let priceRange = document.getElementById('price-range'),
        price = document.getElementById('price'),        
        contributionPrice = document.getElementById('contribution-price'),
        contributionProcent = document.getElementById('contribution-procent'),
        contributionRange = document.getElementById('contribution-range'),
        yearsNumber = document.getElementById('years-number'),
        yearsRange = document.getElementById('years-range'),
        sber = document.getElementById('sber');



    price.textContent = (priceRange.value*100);

    contributionPrice.textContent = contributionRange.value*90;
    contributionProcent.textContent = contributionRange.value/100 + '%';

    sber.textContent = 3;

    yearsNumber.textContent = yearsRange.value;

    priceRange.addEventListener('input', function(){
        console.log(2);
        
        price.textContent = priceRange.value*100;
        
        sber.textContent = priceRange.value*100;
    });


    contributionRange.addEventListener('input', function(){
        contributionPrice.textContent = contributionRange.value*90;
        contributionProcent.textContent = contributionRange.value/100 + '%';
    });
    
    yearsRange.addEventListener('input', function() {
        yearsNumber.textContent = yearsRange.value;
    });

});

// $(document).ready(function(){

    
// });
