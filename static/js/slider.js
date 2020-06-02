$(document).ready(function(){
	var $status = $('.efficiency .count-slide span');
	var $slickElementEfficiency = $('.efficiency-slider');

	$slickElementEfficiency.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		$status.text(i + ' из ' + slick.slideCount);
	});

	$slickElementEfficiency.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 1000,
		dots: false,
		centerMode: false,
		infinity: true,
		arrows: true,
		prevArrow: $('.efficiency .arrows .prev'),
		nextArrow: $('.efficiency .arrows .next'),
	});

	if ($('body').width() < 991) {
		var $status = $('.count-slide span');
		var $slickElement = $('.settings-cards-slider');

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + ' из ' + slick.slideCount);
		});

		$slickElement.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			speed: 1000,
			dots: false,
			centerMode: false,
			infinity: true,
			arrows: true,
			prevArrow: $('.settings-cards .arrows .prev'),
			nextArrow: $('.settings-cards .arrows .next'),
		});
	};



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

	$('.reviews-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.reviews-owners-slider',
		autoplay: false,
		speed: 1000,
		arrows: false,
		dots: false,
		cssEase:'linear',
		useCSS: true,
		fade: true,
		infinity: true,
		lazyLoad: 'ondemand'
	});


	let options = {
		horizontal: 1,
		itemNav: 'basic',
		speed: 300,
		scrollBy: 1,
		mouseDragging: 1,
		scrollBy:     0,
		scrollTrap: 	true,
		touchDragging: 1,
		dragHandle: 1,
		scrollBar: $('.js-slider').find('.c-scrollbar'),
		scrollBy: 1,
		pagesBar: $('.js-slider').find('.pages'),
		activatePageOn: 'click',
		pageBuilder:          // Page item generator.
		function (index) {
			return '<li>' + (index + 1) + '</li>';
		},
	},
	slider = new Sly('.js-slider-frame', options).init();




});
