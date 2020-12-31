jQuery(document).ready(function($) {
	// tooltip
	$('.social-network li a, .options_box .color a').tooltip();

	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
	});

	// flexslider
	$('.main-slider').flexslider({
        // Primary Controls
        controlNav          : true,
        directionNav        : false,
		prevText: "",
		nextText: "",
        // Special properties
        controlsContainer   : "",
        manualControls      : "",
        sync                : "",
        asNavFor            : "",
	});
});
