

$(document).ready(function() {
	

	window.scrollReveal = new scrollReveal();
	"use strict";
	
	// Backstretchs
	$("#header").backstretch("images/3.png");
	$("#resume").backstretch("images/3.png");
	
	
	// PreLoader
	$(window).load(function() {
		$(".loader").fadeOut(400);
	});
	
	$("#nav").affix({
      offset: {
        top: $("#header").outerHeight(true)}
	}).on('affix.bs.affix', function(){
        $('#page-wrapper').css('margin-top', $('#nav').outerHeight(true));
    }).on('affix-top.bs.affix', function(){
        $('#page-wrapper').css('margin-top','0');
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
	
	
	
		
});

