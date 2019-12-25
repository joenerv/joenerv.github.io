'use strict';

let money, 
	name,
	time,
	price


let mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true,
	discount: false
}

function start() {
	money = prompt('Ваш бюджет', '15000');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt('Ваш бюджет', '15000');
	}
	name  = prompt('Введите неазвание магазина', 'пятерочка').toLocaleUpperCase();
	time  = 19;
}

// start();



function chooseGoods() {

	for (let i = 0; i < 5; i++) {
		let a = prompt('какой тип товаров будем продавать?', 'картошка');
		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('все верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
	}
}

// chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('такого не может быть');
	} else if(time > 8 && time < 20) {
			console.log('магазин работает');		
		} else if (time < 24) {
			console.log('слишком поздно');
			
			} else {
				console.log('такого не может быть');
				}
}
workTime(23);

let budgetDay = money/30;

console.log('Ваш бюджет на 1 день ' + budgetDay + ' р.');

console.log(mainList);


// let week = ['понед', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'вскр'];

// let weekend = document.getElementById('mary');

// weekend.textContent = week;

// console.log(week);


//------FUNCTION
/*let num = 20;
function showFirstMessage(text) {
	//alert(text);
	num = 10; // если переменную объявляем внутри функции, то и видна она будет внутри ф-ии (локальная переменная), если за пределами ф-ии
}

showFirstMessage('hello')*/

/*function calc(a,b) {
	return a+b
}
console.log(calc(5,10));
console.log(calc(4,5)); - function-decloration - ф-я может быть вызвана в любом месте кода, она объявляется в потоке кода*/

/*let calc = function (a,b) {
	return a+b;
}
console.log(calc(5,10)); - function-expresion - ф-я присваивается в переменную. Может быть вызвана только тогда, когда код до нее доходит. не может быть вызвана заранее*/

/*let calc = (a,b) => a+b

console.log(calc(10,5));
console.log(calc(4,5)); //- стрелочная ф-я. по свойствам как expresion.*/
