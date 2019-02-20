$(function() {
 $('.slider__items').owlCarousel({
 	loop: true,
 	margin: 20,
 	items: 2,
 	responsive:{
			760:{
				items:4,
			},
		}
 });
});