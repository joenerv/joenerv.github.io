import './vendor';
$(document).ready(() => {
	$('#name').on('keypress', (element) => {
		let char = /[A-Za-zА-Яа-яЁё]/;
		let val = String.fromCharCode(element.which);
		let test = char.test(val);

		if (!test) {
			return false;
		}
	});
});
