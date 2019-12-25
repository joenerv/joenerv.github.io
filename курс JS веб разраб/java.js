'use strict';

/*let money = +prompt('Ваш бюджет', '15000');
let name = prompt('Введите неазвание магазина', '5-ka');
let time = 19;

let mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true
}



for (let i = 0; i < 5; i++) {
	let a = prompt('какой тип товаров будем продавать?', 'картошка');
	 
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('все верно');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
}


if (time < 0) {
	console.log('такого не может быть');
} else if(time > 8 && time < 20) {
		console.log('магазин работает');		
	} else if (time < 24) {
		console.log('слишком поздно');
		
		} else {
			console.log('такого не может быть');
			}


let budgetDay = money/30;


alert('Ваш бюджет на 1 день ' + budgetDay + ' р.');

console.log(mainList);*/

let week = ['понед', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'вскр'];

let weekend = document.getElementById('mary');

weekend.textContent = week;

console.log(week);
