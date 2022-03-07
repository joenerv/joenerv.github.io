window.addEventListener('DOMContentLoaded', function() {

	'use strict';


	let info = document.querySelector('.info');//header

	window.addEventListener('scroll', () => {
		console.log(window.innerHeight);
		console.log(window.pageYOffset);
		if(window.pageYOffset > window.innerHeight) {
			info.classList.add('scroll');
		} else {
			info.classList.remove('scroll');
		}
	});


	// для поворота глаза
	let bannerLogoRing = document.querySelector('.js_banner_logo_ring');

	document.querySelector('body').addEventListener('mousemove', (e) => {
		let x = e.clientX * 100 / window.innerWidth + "%";
		let y = e.clientY * 100 / window.innerHeight + "%";
		console.log(x + ' ' + y);
		bannerLogoRing.style.left = x ;
		bannerLogoRing.style.top = y;
		bannerLogoRing.style.transform = "translate(-" + x + ", -" + y + ")";

	});


	// скролл вниз при клике на кнопку
	let bannerDown = document.querySelector('.js_banner_down');//

	bannerDown.addEventListener('click', () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth'
		})
	});

	const infoSlidersLeft = new Swiper('.js_info_sliders_left', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 'auto',
		speed: 10000,
		spaceBetween: 40,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		  },

	});
	
	const infoSlidersRight = new Swiper('.js_info_sliders_right', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		loopFillGroupWithBlank: true,
		slidesPerView: 'auto',
		speed: 10000,
		spaceBetween: 40,
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
			reverseDirection: true,
		  },

	});

	// открыть/закрыть модальное окно
	let popup = document.querySelector('.js_popup');// модальное окно
	let openPopup = document.querySelectorAll('.open-popup');// класс открытия popup
	let popupClose = document.querySelector('.js_popup_close');// закрыть popup X
	let popupInputs = popup.querySelectorAll('input');// inputs

	openPopup.forEach(elem => {
		elem.addEventListener('click', () => {
			popup.classList.add('active');
		});
	});

	popupClose.addEventListener('click', () => {
		popup.classList.remove('active');
		popupInputs.forEach(elem => {
			elem.value = "";
		});
	});
	
		
});





