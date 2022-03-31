window.addEventListener('DOMContentLoaded', function() {

	'use strict';


	let info = document.querySelector('.info');//header

	window.addEventListener('scroll', () => {
		if(window.pageYOffset > window.innerHeight) {
			info.classList.add('scroll');
		} else {
			info.classList.remove('scroll');
		}
	});

	// паралакс
		const rellax = new Rellax('.rellax');

	// для поворота глаза
		let bannerLogoRing = document.querySelector('.js_banner_logo_ring');

		document.querySelector('body').addEventListener('mousemove', (e) => {
			let x = e.clientX * 90 / window.innerWidth + "%";
			let y = e.clientY * 90 / window.innerHeight + "%";
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
		
		autoplay: {
			delay: 0,
			disableOnInteraction: true,
		  },

		breakpoints: { 
			320: {
				spaceBetween: 16,
			},
			1200: {
				spaceBetween: 40,
			}
		}

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

	// при клике на заказать креативы
		let infoHeaderButton = document.querySelector('.js_info_header_button');

		infoHeaderButton.addEventListener('click', () => {
			console.log();

			window.scrollTo({
				top: (popup.getBoundingClientRect().top + window.pageYOffset) - 150,
				behavior: 'smooth'
			})


			

		});

	// анимация при скролле

		if(window.innerWidth > 1199) {
			const tl = gsap.timeline();

			tl.fromTo('.js_why_list', {x: '120%'}, {x: 0})

			ScrollTrigger.create({
				animation: tl,
				trigger: '.why',
				start: 'top top',
				end: 'bottom',
				scrub: true,
				pin: true
			});

		}
		

	// маска для ввода номера телфона
		function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select()
			}
		}
		
	// маска для номера телефона
		function maskPhone(event) {
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
		};

	// для инпутов с номером телефона
		/*
		let inputPhoneNumber = document.querySelectorAll('.phone-number');//input с номером телефона

		if(inputPhoneNumber) {
			inputPhoneNumber.forEach(elem => {
				elem.addEventListener("input", maskPhone, false);
				elem.addEventListener("focus", maskPhone, false);
				elem.addEventListener("blur", maskPhone, false); 
			});	
		}
		*/

	// wow
		new WOW().init();

	
		
});





