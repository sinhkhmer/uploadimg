(function ($) {
	function initOwlCarousel() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			loop:true,
        	nav:true,
        	margin:10,
        	responsive:{
            	0:{
                	items:1
            	},
            	600:{
	                items:2
    	        },            
        	    960:{
            	    items:2
            	},
            	1200:{
                	items:2
            	}
        	}
    	});
    	owl.on('mousewheel', '.owl-stage', function (e) {
        	if (e.deltaY>0) {
            	owl.trigger('next.owl');
        	} else {
            	owl.trigger('prev.owl');
        	}
        	e.preventDefault();
    	});
	}
  
	$(document).ready(function () {
    	initOwlCarousel();
		$('.owl-carousel').css('padding-top', '50px');
		var dots = $('.owl-dots').css('position', 'absolute').css('top', '0');
		dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');
  	});
})(jQuery);