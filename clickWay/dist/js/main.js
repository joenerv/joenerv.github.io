window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	//ОТКРЫТИЕ МЕНЮ
		let menuBurger = document.querySelector('.js_main_header_button');//меню бургер
		let menuPopup = document.querySelector('.js_menu_popup');//меню popup
		let menuPopupClose = document.querySelector('.js_menu_popup_close');//закрыть меню Х

		menuBurger.addEventListener('click', () => {
			menuPopup.classList.add('active');
			bodyFixPosition();
		});

		menuPopupClose.addEventListener('click', () => {
			menuPopup.classList.remove('active');
			bodyUnfixPosition();
		});

	// ИНИЦИАЛИЗАЦИЯ rellax.js
		var rellax = new Rellax('.rellax');

	// КНОПКА ПРОМОТАТЬ ВНИЗ НА ВЫСОТУ ЭКРАНА
		let mainButtonScroll = document.querySelector('.js_main_button_scroll');//промотать вниз на высоту экрана
		mainButtonScroll.addEventListener('click', () => {

			window.scrollBy(0, (document.documentElement.clientHeight - 100));

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





