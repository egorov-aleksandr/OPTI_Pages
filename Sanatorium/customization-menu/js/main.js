const cogWheelBtn = document.querySelector(
	".customization-menu__button-cogwheel"
);
const menu = document.querySelector(".customization-menu");

cogWheelBtn.addEventListener("click", () => {
	if (menu.classList.contains("customization-menu-active")) {
		menu.classList.remove("customization-menu-active");
		console.log(1);
	} else {
		menu.classList.add("customization-menu-active");
		console.log(2);
	}
});
