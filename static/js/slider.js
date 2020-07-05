$(document).ready(function(){
	$('.reviews-owners-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		cssEase:'linear',
		useCSS: true,
		fade: true,
		infinity: true,
		lazyLoad: 'ondemand',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		asNavFor: '.reviews-slider',
		prevArrow: $('.reviews .arrows .prev'),
		nextArrow: $('.reviews .arrows .next')
	});
});