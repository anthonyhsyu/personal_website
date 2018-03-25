/*$(function() {
	$("#languages").click(function() {
		$("#language-list").slideToggle("fast");
	});
	$("#software").click(function() {
		$("#software-list").slideToggle("fast");
	});
});
*/
$(function() { /* to make sure the script runs after page load */
    $('a.read-more').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.text-block').find('.more-text').fadeIn(1000); /* show the .more_text span */
    });
});

$(function() { /* to make sure the script runs after page load */
    $('.contact').click(function(event){ /* find all a.read_more elements and bind the following code to them */
        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.text-block').find('.more-text').fadeIn(1000); /* show the .more_text span */
    });
});

setTimeout(function() {
	$("#large-name").fadeIn(2500);

	window.sr = ScrollReveal({reset: true, distance: "0px"});
	sr.reveal("section");
}, 500);