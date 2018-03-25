//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
    //$(".left-side").find(".active").removeClass("active");
    //$(this).parent().addClass("active");
  });

  $(document).on('click', 'a.in-site', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
    //$(".left-side").find(".active").removeClass("active");
    //$(this).parent().addClass("active");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#left-nav',
    offset: 100
  });
});

/*
$(".left-side a").on("click", function(){
   $(".left-side").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
*/