const mainApp = document.querySelector('.app-container');
const emailInput = document.querySelector('.email-input');
const errorInfo = document.querySelector('.error');
const subBtn = document.querySelector('.subscribe');

const popup = document.querySelector('.popup');
const emailSpan = document.querySelector('.email-adress');
const dismBtn = document.querySelector('.dismiss');

const main = () => {
	checkInputLength();
	checkKeyCorrection();
};

const showPopup = () => {
	popup.style.display = 'flex';
	mainApp.style.display = 'none';
	emailSpan.textContent = emailInput.value;
};
const closePopup = () => {
	popup.style.display = 'none';
	mainApp.style.display = 'flex';
	emailInput.value = '';
};

const checkInputLength = () => {
	if (emailInput.value.length <= 0) {
		errorInfo.textContent = 'Email required';
		emailInput.classList.add('input-error');
	} else {
		emailInput.classList.remove('input-error');
		errorInfo.textContent = '';
	}
};
const checkKeyCorrection = () => {
	const emailRegex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (emailInput.value.length > 0) {
		if (emailRegex.test(emailInput.value)) {
			emailInput.classList.remove('input-error');
			errorInfo.textContent = '';
			showPopup();
		} else {
			emailInput.classList.add('input-error');
			errorInfo.textContent = 'Valid Email required';
		}
	}
};

dismBtn.addEventListener('click', closePopup);
subBtn.addEventListener('click', main);
document.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		main();
	}
});
