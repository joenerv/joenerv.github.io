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
    price.textContent = prettify(priceRange.value);   

    //первоначальный взнос, default
    contributionRange.value = priceRange.value * 0.2;
    
    contributionRange.max = priceRange.value;
    contributionRange.min = priceRange.value * 0.15;

    contributionPrice.textContent = prettify(contributionRange.value);
    contributionProcent.textContent = ((contributionRange.value * 100) / priceRange.value) + "%";
    
    //значение срок, default
    yearsNumber.textContent = yearsRange.value;

    countPaymentBankAll();

    //стоимость квартиры, расчет
    priceRange.addEventListener('input', function(){
        
        
        price.textContent = prettify(priceRange.value);

        contributionRange.max = priceRange.value;
        contributionRange.min = Math.round(priceRange.value * 0.15);

        contributionRange.value = Math.round(priceRange.value*0.2);
        contributionPrice.textContent = prettify(contributionRange.value);

        contributionProcent.textContent = Math.round((contributionRange.value * 100) / priceRange.value) + '%';
    });

    priceRange.addEventListener('change', () => {
        countPaymentBankAll();
    });

    // первоначальный взнос, расчет
    contributionRange.addEventListener('input', () => {

        contributionPrice.textContent = prettify(contributionRange.value);

        contributionRange.max = priceRange.value;
        contributionRange.min = Math.round(priceRange.value * 0.15);

        contributionProcent.textContent = Math.round((contributionRange.value * 100) / priceRange.value) + '%';

    });

    contributionRange.addEventListener('change', () => {
        countPaymentBankAll();
    });
    
    // года, расчет
    yearsRange.addEventListener('input', () => {
        yearsNumber.textContent = yearsRange.value;

    });

    yearsRange.addEventListener('change', () => {
        countPaymentBankAll();
    });

    // ф-ия расчета для одного банка без процента.
    function countPaymentBank(b) {

        let a = Math.round(((priceRange.value - contributionRange.value) / (yearsRange.value * 12)) * b);
        return a;
    }

    // ф-ия расчета для все банков
    function countPaymentBankAll() {

        calculatedPaymentAmount[0].textContent = prettify(countPaymentBank(1.093));
        calculatedPaymentAmount[1].textContent = prettify(countPaymentBank(1.086));
        calculatedPaymentAmount[2].textContent = prettify(countPaymentBank(1.0799));
        calculatedPaymentAmount[3].textContent = prettify(countPaymentBank(1.0815));
        calculatedPaymentAmount[4].textContent = prettify(countPaymentBank(1.073));
        calculatedPaymentAmount[5].textContent = prettify(countPaymentBank(1.085));
        calculatedPaymentAmount[6].textContent = prettify(countPaymentBank(1.1));
        calculatedPaymentAmount[7].textContent = prettify(countPaymentBank(1.091));
        calculatedPaymentAmount[8].textContent = prettify(countPaymentBank(1.0849));
    }

    // ф-ия разделения чисел
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
    
});

// $(document).ready(function(){

    
// });