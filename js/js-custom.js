jQuery(function ($) {
    'use strict';
    
    // Start Menu JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
    });	
    
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({
        meanScreenWidth: '991'
    });	
    
    // Search Box JS
	$('.search-toggle').addClass('closed');
	$('.search-toggle .search-icon').on('click', function(e) {
		if ($('.search-toggle').hasClass('closed')) {
		$('.search-toggle').removeClass('closed').addClass('opened');
		$('.search-toggle, .search-area').addClass('opened');
		$('#search-terms').focus();
		} else {
		$('.search-toggle').removeClass('opened').addClass('closed');
		$('.search-toggle, .search-area').removeClass('opened');
		}
	});




	// Preloader JS
	jQuery(window).on('load',function(){
		jQuery('.loader').fadeOut(500);
	});
}(jQuery));