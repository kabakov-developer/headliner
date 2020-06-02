$(document).ready(function() {

	$('.close').click(function(e){
		e.preventDefault();
		$('.online-chat .block').addClass('close-right');
		$('.online-chat .open-block').addClass('visible');
	});

	$('.open-block').click(function(e){
	  	e.preventDefault();
	  	$('.online-chat .block').removeClass('close-right');
	  	$(this).removeClass('visible');
	});

	$('.title-dropdown').click(function(e){
		e.preventDefault();
		$('.modal-body-container .dropdown').toggleClass('show');
	});

	$('.accordion .card button').click(function(){
		$('.card').removeClass('active');
		$(this).closest('.card').addClass('active');
	});

	$('.more-info-link').click(function(e){
		e.preventDefault();
		$(this).closest('.card-item').find('.more-info-hide-block').addClass('show');
	});
	$('.across-close').click(function(e){
		e.preventDefault();
		$(this).closest('.card-item').find('.more-info-hide-block').removeClass('show');
	});


});
