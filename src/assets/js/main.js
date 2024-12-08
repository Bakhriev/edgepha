const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__nav");
const closeBtn = menu.querySelector(".close-btn");
const body = document.body;

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	overlay.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
});

overlay.addEventListener("click", () => {
	burger.classList.remove("active");
	overlay.classList.remove("active");
	menu.classList.remove("active");
	body.classList.remove("lock");
});

closeBtn.addEventListener("click", () => {
	burger.classList.remove("active");
	overlay.classList.remove("active");
	menu.classList.remove("active");
	body.classList.remove("lock");
});
