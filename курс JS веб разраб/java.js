'use strict';

var budget = +prompt('Ваш бюджет', '15000');
var nameMagazine = prompt('Введите неазвание магазина', '5-ka');

var mainList = {
	budgetMany: budget,
	name: nameMagazine,
	shopGoods: ['apple', 'tel', 'water'],
	employers: {},
	open: true
}

console.log(mainList);


var type1 = prompt('какой тип товаров будем продавать?', 'картошка');
var type2 = prompt('какой тип товаров будем продавать?', 'картошка');
var type3 = prompt('какой тип товаров будем продавать?', 'картошка');

var budgetDay = budget/30;

alert('Ваш бюджет на 1 день ' + budgetDay + ' р.');