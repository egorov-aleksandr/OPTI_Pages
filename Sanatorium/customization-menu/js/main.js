const cogwheelBtn = document.querySelector(
	".customization-menu__button-cogwheel"
);
const menu = document.querySelector(".customization-menu");
cogwheelBtn.addEventListener("click", () => {
	if (menu.classList.contains("customization-menu-active")) {
		menu.classList.remove("customization-menu-active");
	} else {
		menu.classList.add("customization-menu-active");
	}
});

const containers = document.querySelectorAll(
	".customization-menu__container-images"
);
containers.forEach((container) => {
	const buttons = container.querySelectorAll(
		".customization-menu__button-image"
	);
	let activeBtn = container.querySelector(
		".customization-menu__button-image-active"
	);
	buttons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (btn !== activeBtn) {
				activeBtn.classList.remove(
					"customization-menu__button-image-active"
				);
				btn.classList.add("customization-menu__button-image-active");
				activeBtn = btn;
			}
		});
	});
});
