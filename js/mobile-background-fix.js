$(window).scroll(function() {
	if ($(window).width() <= 600) {
		var scrolledY = $(window).scrollTop();
		$('body').css('background-position', '100% ' + ((scrolledY)) + 'px');
	}
});