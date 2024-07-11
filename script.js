// MOBILE NAV OPEN AND CLOSE
const nav = document.querySelector(".mnav");
const navBtn = document.querySelector(".mnav_close_btn");
const navIcon = document.querySelector(".mnav_close_btn_icon");

navBtn.addEventListener("click", () => {
	if (nav.classList.contains("-left-[300px]")) {
		nav.classList.toggle("left-0");
		navIcon.classList.toggle("ri-arrow-left-s-line");
		navIcon.classList.toggle("ri-arrow-right-s-line");
	}
});
