"use strict";
const inputEl = document.querySelector("#validation-input");
inputEl.classList.add("#validation-input");
inputEl.addEventListener("blur", (event) => {
	if (
		event.currentTarget.value.length ===
		Number(event.currentTarget.dataset.length)
	) {
		inputEl.classList.remove("invalid");
		inputEl.classList.add("valid");
	} else {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
});
