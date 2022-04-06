window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	// форма на странице Регистрация - имя
		if(document.querySelector('.js_registr_form_name')) {

			let registrFormName = document.querySelector('.js_registr_form_name');
			let registrFormNameInput = registrFormName.querySelector('input');
			let registrFormNameButton = registrFormName.querySelector('.js_registr_form_button');

			registrFormNameInput.addEventListener('input', () => {
				if(registrFormNameInput.value.length > 3) {
					registrFormNameButton.classList.remove('disabled')
				} else {
					registrFormNameButton.classList.add('disabled')
				}
			});
		}

	// форма на странице Регистрация - откуда вы
		if(document.querySelector('.js_registr_form_where')) {

			let registrFormWhere = document.querySelector('.js_registr_form_where');//форма
			let registrFormWhereInput = registrFormWhere.querySelectorAll('input');//input
			let registrFormWhereButton = registrFormWhere.querySelector('.js_registr_form_button');//кнопка

			registrFormWhereInput[0].addEventListener('input', () => {
				if((registrFormWhereInput[0].value.length > 3) && (registrFormWhereInput[1].value.length > 3)) {
					registrFormWhereButton.classList.remove('disabled');
				} else {
					registrFormWhereButton.classList.add('disabled');
				}
			});

			registrFormWhereInput[1].addEventListener('input', () => {
				if((registrFormWhereInput[0].value.length > 3) && (registrFormWhereInput[1].value.length > 3)) {
					registrFormWhereButton.classList.remove('disabled');
				} else {
					registrFormWhereButton.classList.add('disabled');
				}
			});


		}

	// форма на странице Регистрация - номер телефона
		if(document.querySelector('.js_registr_form_phone')) {
			let registrFormPhone = document.querySelector('.js_registr_form_phone');// форма
			let input = registrFormPhone.querySelector("input");
			let button = registrFormPhone.querySelector('.js_registr_form_button');//button

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false); 

			input.addEventListener('input', () => {
				if(input.value.length > 14) {
					button.classList.remove('disabled');
				} else {
					button.classList.add('disabled');
				}
			});


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
			
			function mask(event) {
				var matrix = "+7 ___ ___ ____",
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
		}	

	// форма на странице Регистрация - данные
		if(document.querySelector('.js_registr_form_data')) {

			let blockInputPass = document.querySelector('.js_block_input_pass');
			let blockInputPassInput = blockInputPass.querySelector('input');//input pass
			let blockInputPassButton = blockInputPass.querySelector('button');//button

			blockInputPassButton.addEventListener('click', (e) => {
				e.preventDefault();
				if(blockInputPassInput.getAttribute('type') == 'password') {
					blockInputPassInput.setAttribute('type', 'text');
				} else {
					blockInputPassInput.setAttribute('type', 'password');
				}
			});

			// проверка формы на валидность
			let registrFormData = document.querySelector('.js_registr_form_data');//form
			registrFormData.addEventListener('submit', (e) => {
				e.preventDefault();
				window.location.href = 'page-registr-agreement.html';
			});
		}
		
	


	
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





