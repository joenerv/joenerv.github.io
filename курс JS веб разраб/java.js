'use strict';

let money, 
	name,
	time,
	price = 100;


let mainList = {
	budget: money,
	nameShop: name,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {

		for (let i = 0; i < 5; i++) {
			let a = prompt('какой тип товаров будем продавать?', 'картошка');
			
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('все верно');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
				}
		}
	},
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
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через зяпятую товары", "");

			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length < 20) {
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите, еще ", ""));
				mainList.shopItems.sort();
				console.log("ok google");
				
				for ( let i = 0; i < mainList.shopItems.length; i++) {
					console.log("В нашем магазине вы найдете: " + mainList.shopItems[i]);
					
					}
				
			} else {
				i = i - 1;
			}
		}
	}
}


function start() {
	money = prompt('Ваш бюджет', '15000');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt('Ваш бюджет', '15000');
	}
	name  = prompt('Введите неазвание магазина', 'пятерочка').toLocaleUpperCase();
	time  = 19;
}



console.log(mainList);


function getSize(width,height,depth) {
	let area = width * height;
	let volume = width * height * depth;
	let sizes = [area, volume];
	return sizes;
}

let areaOne = getSize(3,2,3)[1];

console.log(areaOne);


//--------ООП--------

/*let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);*/





// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// console.log(arr.length);





//------FUNCTION--------
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