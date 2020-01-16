'use strict';

let open                = document.getElementById('open-btn'),
    name_value          = document.getElementsByClassName('name-value')[0],
    budget_value        = document.getElementsByClassName('budget-value')[0],
    items_value         = document.getElementsByClassName('items-value')[0],
    goods_value         = document.getElementsByClassName('goods-value')[0],
    employers_value     = document.getElementsByClassName('employers-value')[0],
    discount_value      = document.getElementsByClassName('discount-value')[0],
    isopen_value        = document.getElementsByClassName('isopen-value')[0],

    goods_item          = document.getElementsByClassName('goods-item'),
    goods_btn           = document.getElementsByTagName('button')[1],
    budget_btn          = document.getElementsByTagName('button')[2],
    employers_btn       = document.getElementsByTagName('button')[3],
    choose_item         = document.querySelector('.choose-item'),
    time_value          = document.querySelector('.time-value'),
    count_budget_value  = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');


let money, 
    price = 100;

open.addEventListener('click', () => {
    money = prompt('Ваш бюджет', '15000');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет', '15000');
    }

    budget_value.textContent = money;

    name_value.textContent  = prompt('Введите неазвание магазина', 'пятерочка').toLocaleUpperCase();
});
  
goods_btn.addEventListener('click', () => {

    for (let i = 0; i < goods_item.length; i++) {
        let a = goods_item[i].value
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
            console.log('все верно');
            mainList.shopGoods[i] = a;
            goods_value.textContent = mainList.shopGoods;
        } else {
            i = i - 1;
            }
    }
});

choose_item.addEventListener('change', () => {

    let items = choose_item.value;

    if (isNaN(items) && items != '') {
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();

        items_value.textContent = mainList.shopItems;
    }
});
    
let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: true,
    discount: true,
    shopItems: [],

    workTime: function workTime(time) {
        if (time < 0) {
            console.log('такого не может быть');
        } else if(time > 8 && time < 20) {
                console.log('магазин работает');	
                mainList.open = true;	
            } else if (time < 24) {
                console.log('слишком поздно');
                
                } else {
                    console.log('такого не может быть');
                    }
    },
    dayBudget: function dayBadget() {
        alert("Ежедневный бюджет " + mainList.budget / 30);		
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = price*0.8;
            console.log("цена с учетом скидки = " + price);		
        } else {
            console.log("цена = " + price);
            
        }
    },
    hireEmployers: function hireEmployers() {
        for (let i = 0; i < 4; i++) {
            let a = prompt("Введите имя сотрудника", "Мария");
    
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 20) {
                console.log('super');
                let b = i + 1;
                mainList.employers[i] = b + " - " + a;			
            } else {
                i = i - 1;
            }
        }
    },
    chooseShopItems: function chooseShopItems() {

}
    
console.log(mainList);
