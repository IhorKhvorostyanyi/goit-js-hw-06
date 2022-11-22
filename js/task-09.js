"use strict";
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const colorValueEl = document.querySelector(".color");
const handleClick = (event) => {
	colorValueEl.textContent = getRandomHexColor();
	bodyEl.style.backgroundColor = colorValueEl.textContent;
};

buttonEl.addEventListener("click", handleClick);
