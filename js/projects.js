// jshint esversion: 6
$(function() {
	let $carousel = $(".owl-carousel");
	$carousel.owlCarousel({
		items: 1,
		loop: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplay: true,
		dots: true,
		autoplayTimeout: 2800,
		autoplayHoverPause: true
	});
});