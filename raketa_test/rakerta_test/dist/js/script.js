window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let priceRange = document.getElementById('price-range'),
        price = document.getElementById('price'),        
        contributionPrice = document.getElementById('contribution-price'),
        contributionProcent = document.getElementById('contribution-procent'),
        contributionRange = document.getElementById('contribution-range'),
        yearsNumber = document.getElementById('years-number'),
        yearsRange = document.getElementById('years-range'),
        calculatedPaymentAmount = document.querySelectorAll('#calculated-payment-amount');


    //значение стоимости default
    price.textContent = priceRange.value;    

    

    //первоначальный взнос, default
    contributionRange.value = priceRange.value * 0.2;
    
    contributionRange.max = priceRange.value;
    contributionRange.min = priceRange.value * 0.15;

    contributionPrice.textContent = contributionRange.value;
    contributionProcent.textContent = ((contributionRange.value * 100) / priceRange.value) + "%";
    

    //значение срок, default
    yearsNumber.textContent = yearsRange.value;

    calculatedPaymentAmount[0].textContent = calc(1.093);

    //стоимость квартиры, расчет
    priceRange.addEventListener('input', function(){
        console.log(2);
        
        price.textContent = priceRange.value;

        contributionRange.value = priceRange.value*0.2;
        contributionPrice.textContent = contributionRange.value;
        contributionProcent.textContent = Math.round((contributionRange.value * 100) / priceRange.value) + "%";

        calculatedPaymentAmount[0].textContent = calc(1.093);
        calculatedPaymentAmount[1].textContent = calc(1.086);
        calculatedPaymentAmount[2].textContent = calc(1.0799);
        calculatedPaymentAmount[3].textContent = calc(1.0815);
        calculatedPaymentAmount[4].textContent = calc(1.073);
        calculatedPaymentAmount[5].textContent = calc(1.085);
        calculatedPaymentAmount[6].textContent = calc(1.1);
        calculatedPaymentAmount[7].textContent = calc(1.091);
        calculatedPaymentAmount[8].textContent = calc(1.0849);
        
    });

    


    // первоначальный взнос, расчет
    contributionRange.addEventListener('input', function(){

        contributionPrice.textContent = contributionRange.value;

        contributionProcent.textContent = Math.round((contributionRange.value * 100) / priceRange.value) + '%';

        calculatedPaymentAmount[0].textContent = Math.round(((priceRange.value - contributionRange.value) / (yearsRange.value * 12)) * 1.093);
    });
    
    // года, пасчет
    yearsRange.addEventListener('input', function() {
        yearsNumber.textContent = yearsRange.value;

        calculatedPaymentAmount[0].textContent = Math.round(((priceRange.value - contributionRange.value) / (yearsRange.value * 12)) * 1.093);
    });

    // ф-ия расчета для одного банка без процента.
    function calc(b) {
        let a = Math.round(((priceRange.value - contributionRange.value) / (yearsRange.value * 12)) * b);
        return a;
    }

});

// $(document).ready(function(){

    
// });
