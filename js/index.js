const burgerBtn = document.querySelector('.burger');
const burgerOverlay = document.querySelector('.burger-menu__overlay');
const burgerNav = document.querySelector('.burger-nav');

burgerBtn.addEventListener('click', function () {
	this.classList.toggle('active');
	burgerOverlay.classList.toggle('active');
	burgerNav.classList.toggle('active');
});
burgerNav.addEventListener('click', function () {
	burgerBtn.classList.add('active');
});
burgerOverlay.addEventListener('click', function () {
	burgerBtn.classList.remove('active');
	burgerNav.classList.remove('active');
	burgerOverlay.classList.remove('active');
});
