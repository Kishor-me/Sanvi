// navbar scroll remove class js 

$(window).scroll(function() {
	if ($(document).scrollTop() > 80) {
	$('.socialheaderlink').addClass('socialheaderlinkNone');
	$('.navbarset').addClass('navbarsetFixed');
		} else {
	$('.socialheaderlink').removeClass('socialheaderlinkNone');
	$('.navbarset').removeClass('navbarsetFixed');
		}
});

// banner slider js here
$('.flexslider').flexslider({
	animation: "slide",
	slideshow: true,
	controlNav: false
});

// tooltip js here
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

 // Hot Deals slider js start here
 var base_carousel = $('.pintrslider');
 if (base_carousel.length) {
	 base_carousel.owlCarousel({
		//  loop:true,
		 rewind: true,
		 margin:false,
		 autoplay:true,
		 autoplayTimeout:2000,
		 autoplayHoverPause:true,
		 singleItem:true,
		 nav:false,
		 dots: false,
		 responsive:{
			 0:{
				 items:1
			 },
			 600:{
				 items:1
			 },
			 767:{
				 items:2
			 },
			 1000:{
				 items:4
			 }
		 }
	 });
 }
$(document).on('click','.pintrest_section .Previous',function(){
	$(".pintrslider .owl-prev").trigger('click');
});
   
$(document).on('click','.pintrest_section .Next',function(){
	$(".pintrslider .owl-next").trigger('click');
});
		