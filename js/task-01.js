"use strict";
const categoriesElement = document.querySelector("#categories");
const categoriesItemsElements = categoriesElement.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsElements.length}`);
categoriesItemsElements.forEach((el) => {
	console.log("");
	console.log(`Category: ${el.querySelector("h2").textContent}`);
	console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
