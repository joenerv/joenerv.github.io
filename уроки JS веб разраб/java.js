'use strict';

let money, 
	name, 
	time,
	price

function start() {
	money = prompt('Ваш бюджет?', '');
	
	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '');
	}
	name = prompt('Название магазина', '').toUpperCase();
	time = 21;
}

// start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('Какой тип товара будем продавать?');
		
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
		console.log('Такого не может быть');

		} else if (time > 8 && time < 20) {
			console.log('время работать')
			}  else if(time < 24) {
				console.log('Уже слишком поздно');
			} else {
				console.log('В сутках только 24 часа')
			}; 
};

function budget() {
	if (mainList.discount == true) {
		alert((mainList.budget / 30)*0.8);
	} else {
		alert(mainList.budget / 30);
	}
}
// budget();

// console.log(mainList);


let options = {
	name: 'test',
	width: 1024,
	height: 1024
}
options.bool = 'false';
options.colors = {
	border: 'black',
	background: 'red'
}

delete options.bool

for( let key in options) {
	console.log('svoistvo ' + key + ' imeet zna4enie' + options[key])
}

console.log(Object.keys(options).length);

console.log(options);