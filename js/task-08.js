"use strict";
const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (password.value === "" && email.value === "") {
		console.log("Вы ничего не ввели!");
		return;
	} else if (password.value === "") {
		console.log("Введите пароль!");
		return;
	} else if (email.value === "") {
		console.log("Введите Эл.почту!");
		return;
	}

	console.log(`Email: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
}
