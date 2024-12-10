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

if (window.innerWidth <= 992) {
	const menuItems = document.querySelectorAll(".menu-item-has-children");

	menuItems.forEach(item => {
		const subMenu = item.querySelector(".sub-menu");

		item.addEventListener("click", () => {
			item.classList.toggle("active");

			console.log(subMenu, subMenu.style.height);

			if (subMenu.style.height === "") {
				subMenu.style.height = subMenu.scrollHeight + "px";
			} else {
				subMenu.style.height = "";
			}
		});
	});
}

const accordionInit = () => {
	const accordions = document.querySelectorAll(".accordion");

	accordions?.forEach(accordion => {
		const btn = accordion?.querySelector(".accordion__toggle");
		const inner = accordion?.querySelector(".accordion__inner");

		btn.addEventListener("click", () => {
			hideAccordions();

			accordion.classList.add("active");

			inner.style.height = inner.scrollHeight + "px";
		});
	});

	const hideAccordions = () => {
		accordions.forEach(accordion => {
			const inner = accordion?.querySelector(".accordion__inner");

			inner.style.height = "";
			accordion?.classList.remove("active");
		});
	};
};

accordionInit();

const tabInit = () => {
	const tab = document.querySelector(".tab");

	const btns = tab.querySelectorAll(".tab__btn");
	const panels = tab?.querySelectorAll(".tab__panel");

	btns.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			hideBtns();
			hidePanels();

			btn.classList.add("active");
			panels[i].classList.add("active");
		});
	});

	const hidePanels = () => {
		panels.forEach(panel => panel.classList.remove("active"));
	};

	const hideBtns = () => {
		btns.forEach(btn => btn.classList.remove("active"));
	};
};

tabInit();
