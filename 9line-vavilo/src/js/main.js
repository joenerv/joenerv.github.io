import './vendor';
let scaleOrange = document.querySelector('.level-scale__orange');
let scaleGreen = document.querySelector('.level-scale__green');
let scaleBlue = document.querySelector('.level-scale__blue');
let scaleArrow = document.querySelector('.level-scale__arrow');
let textNumber = document.querySelector('.level-text__number');

scaleOrange.addEventListener('click', () => {
	scaleArrow.classList.remove('green');
	scaleArrow.classList.remove('blue');
	scaleArrow.classList.add('orange');
	textNumber.textContent = '20';
});
scaleGreen.addEventListener('click', () => {
	scaleArrow.classList.remove('orange');
	scaleArrow.classList.remove('blue');
	scaleArrow.classList.add('green');
	textNumber.textContent = '50';
});
scaleBlue.addEventListener('click', () => {
	scaleArrow.classList.remove('green');
	scaleArrow.classList.remove('orange');
	scaleArrow.classList.add('blue');
	textNumber.textContent = '100';
});