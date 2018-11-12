$(document).ready(function() {

	$(".enter").hover(function() {
		$(this).removeClass("removeglow"); 
   		$(this).addClass("glow");
  	}, function() {
  		$(this).removeClass("glow");
   		$(this).addClass("removeglow");
  	});

});