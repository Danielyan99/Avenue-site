const arrowPrev = document.querySelector('.arrow-prev'),
	arrowNext = document.querySelector('.arrow-next'),
	productSlides = document.querySelectorAll('.product-slider__item')
let index = 0;

arrowNext.addEventListener('click', function () {
	if (index == productSlides.length - 1) {
		index = 0;
	} else index++
	for (slide of productSlides) {
		slide.classList.remove('active')
	}
	productSlides[index].classList.add('active')
})
arrowPrev.addEventListener('click', function () {
	if (index == 0) {
		index = productSlides.length - 1
	} else index--
	for (slide of productSlides) {
		slide.classList.remove('active')
	}
	productSlides[index].classList.add('active')
})

const quantityPlus = document.querySelector('.quantity-arrow__plus'),
	quantityMinus = document.querySelector('.quantity-arrow__minus')
let quantityBox = document.querySelector('.quantity');
let quantity = +(quantityBox.innerText);

quantityPlus.addEventListener('click', function () {
	quantity++;
	quantityBox.innerText = quantity.toString()
})
quantityMinus.addEventListener('click', function () {
	if (quantity === 1) {
		quantity = 1;
	} else quantity--
	quantityBox.innerText = quantity.toString()
})