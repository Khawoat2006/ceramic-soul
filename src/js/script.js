import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import JustValidate from "just-validate";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu_active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu_active");
	document.body.style.overflow = "";
});

try {
	new Swiper(".works__slider", {
		slidesPerView: 1,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".icon-right-open",
			prevEL: ".icon-left-open",
		},
		breakpoints: {
			// when window is >= 1200px
			1200: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			// when window is >= 1920px
			1920: {
				spaceBetween: 35,
			},
		},

		modules: [Navigation, Pagination],
	});
} catch (e) {}

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Видаляємо активний клас у всіх табів та контенту
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			contents.forEach((c) => (c.style.display = "none"));

			// Додаємо активний клас до натиснутого табу та показуємо відповідний контент
			tab.classList.add("catalog__tab_active");
			contents[index].style.display = "flex";
		});
	});

	// Показуємо перший контент під час завантаження
	contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {
	console.error(e);
}

try {
	const validator = new JustValidate("form");
	validator
		.addField("#name", [
			{
				rule: "required",
			},
			{
				rule: "minLength",
				value: 2,
			},
		])
		.addField("#email", [
			{
				rule: "required",
			},
			{
				rule: "email",
			},
		])
		.addField(
			"#question",
			[
				{
					rule: "required",
				},
				{
					rule: "minLength",
					value: 5,
				},
			],
			{
				errorsContainer: document
					.querySelector("#question")
					.parentElement.querySelector(".error-message"),
			}
		)
		.addField(
			"#checkbox",
			[
				{
					rule: "required",
				},
			],
			{
				errorsContainer: document
					.querySelector("#checkbox")
					.parentElement.parentElement.querySelector(
						".checkbox-error-message"
					),
			}
		)
		.onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
				});
		});
} catch (e) {
	console.error(e);
}

try {
	const validatorFooter = new JustValidate(".footer__form");
	validatorFooter
		.addField(
			"#footer__input",
			[
				{
					rule: "required",
				},
				{
					rule: "email",
				},
			],
			{
				errorsContainer: document
					.querySelector("#footer__input")
					.parentElement.querySelector(".email-error-message"),
			}
		)
		.addField(
			"#footer__checkbox",
			[
				{
					rule: "required",
				},
			],
			{
				errorsContainer: document
					.querySelector("#footer__checkbox")
					.parentElement.parentElement.querySelector(
						".check-error-message"
					),
			}
		)
		.onSuccess((event) => {
			const form = event.currentTarget;
			const formData = new FormData(form);

			fetch("https://httpbin.org/post", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Success", data);
					form.reset();
				});
		});
} catch (e) {
	console.error(e);
}
