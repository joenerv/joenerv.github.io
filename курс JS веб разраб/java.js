/*let timerId = setTimeout(log, 2000)

function log() {
	console.log('hello');
	timerId = setTimeout(log, 2000)
	
} 

function User (name, id) {

	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log('hello ' + this.name);
		
	}
}

User.prototype.exit = function(name) {
	console.log('пользователь ' + this.name + ' ушел');
	
}

let ivan = new User('Ivan', 23);
let alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();

let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
		
	}
}
obj.sum();*/

// let user = {
// 	name: 'John'
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
	
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// let btn = document.getElementsByTagName('button')[0];

/*btn.addEventListener('click', function() {
	this.style.backgroundColor = 'gray';
	this.style.width = 100 + 'px';
	this.style.height = 80 + 'px';
	this.style.borderRadius = 20 + 'px';
});

let age = document.getElementById('age');

function showUser(surname, name) { 
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value); 
}*/

/*
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;

	}

	newBlock() {

		let div = document.createElement('div');
		document.body.appendChild(div);
		div.classList.add('block');

		div.style.cssText = `
			width: ${this.width}px;
			height: ${this.height}px;
			background-color: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};
		`;

		div.textContent = 'new block';
	}

}

const square = new Options(150, 800, 'gray', 15, 'center');

square.newBlock();*/

let user = (function() {
	let privat = function() {
		console.log('i am privat!' );		
	};

	let sayHello = function(){
		console.log('Hello');
		
	};

	return {
		sayHello : sayHello,
		privat : privat
	}

}());

console.log(user.sayHello());
console.log(user.privat());

