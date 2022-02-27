window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	/*
	let info = document.querySelector('.info');//header

	window.addEventListener('scroll', () => {
		if(window.pageYOffset > window.innerHeight) {
			info.classList.add('scroll');
		} else {
			info.classList.remove('scroll');
		}
	});

	*/

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
		slidesPerView: 'auto',
		speed: 2000,
		spaceBetween: 40,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		  },

	});
	
	const infoSlidersRight = new Swiper('.js_info_sliders_right', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 'auto',
		speed: 2000,
		spaceBetween: 40,
		autoplay: {
			delay: 0,
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
			bodyFixPosition();
		});
	});

	popupClose.addEventListener('click', () => {
		popup.classList.remove('active');
		bodyUnfixPosition();
		popupInputs.forEach(elem => {
			elem.value = "";
		});
	});
	

	// 1. Фиксация <body>
	function bodyFixPosition() {

		setTimeout( function() {
		/* Ставим необходимую задержку, чтобы не было «конфликта» в случае, если функция фиксации вызывается сразу после расфиксации (расфиксация отменяет действия расфиксации из-за одновременного действия) */
	
		if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
	
			// Получаем позицию прокрутки
			let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	
			// Ставим нужные стили
			document.body.setAttribute('data-body-scroll-fix', scrollPosition); // Cтавим атрибут со значением прокрутки
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = '-' + scrollPosition + 'px';
			document.body.style.left = '0';
			document.body.style.width = '100%';
	
		}
	
		}, 15 ); /* Можно задержку ещё меньше, но у меня работало хорошо именно с этим значением на всех устройствах и браузерах */
	
	}
  
	// 2. Расфиксация <body>
	function bodyUnfixPosition() {
	
		if ( document.body.hasAttribute('data-body-scroll-fix') ) {
	
		// Получаем позицию прокрутки из атрибута
		let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
	
		// Удаляем атрибут
		document.body.removeAttribute('data-body-scroll-fix');
	
		// Удаляем ненужные стили
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.left = '';
		document.body.style.width = '';
	
		// Прокручиваем страницу на полученное из атрибута значение
		window.scroll(0, scrollPosition);
	
		}
	
	}
		
});





