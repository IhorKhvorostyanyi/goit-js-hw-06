const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const parentEl = document.querySelector("#ingredients");

const newElements = ingredients.map((ingridientName) => {
	const newChildEl = document.createElement("li");
	newChildEl.classList.add("item");
	newChildEl.textContent = ingridientName;
	return newChildEl;
});

parentEl.append(...newElements);
