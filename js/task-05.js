"use strict";
const inputEl = document.querySelector("#name-input");
const greetingsNameEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
	greetingsNameEl.textContent =
		event.currentTarget.value.length === 0
			? "Anonymous"
			: event.currentTarget.value;
});
