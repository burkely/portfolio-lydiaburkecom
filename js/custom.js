
$(function() {

	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});
				
    // Select all links with hashes
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			   if (target.length) {
				 $('html,body').animate({
					 scrollTop: target.offset().top-50
				}, 1000);
				return false;
			}
		}
	});
	
	// Backstretchs
	$("#header").backstretch("images/3.png");
	$("#services").backstretch("images/3.png");
	
	
	$("#nav").affix({
      offset: {
        top: $("#header").outerHeight(true)}
	}).on('affix.bs.affix', function(){
        $('#page-wrapper').css('margin-top', $('#nav').outerHeight(true));
    }).on('affix-top.bs.affix', function(){
        $('#page-wrapper').css('margin-top','0');
	});
		
		
});

