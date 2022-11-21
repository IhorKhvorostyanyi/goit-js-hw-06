let counterValue = 0;
const valueEl = document.querySelector("#value");
valueEl.textContent = counterValue;
const buttonUpEl = document.querySelector('button[data-action="increment"]');
const buttonDownEl = document.querySelector('button[data-action="decrement"]');
const increaseValue = () => {
	counterValue += Number(buttonUpEl.textContent);
	valueEl.textContent = counterValue;
};
const decreaseValue = () => {
	counterValue += Number(buttonDownEl.textContent);
	valueEl.textContent = counterValue;
};
buttonUpEl.addEventListener("click", increaseValue);
buttonDownEl.addEventListener("click", decreaseValue);
