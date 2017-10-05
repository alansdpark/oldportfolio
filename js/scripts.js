$(document).ready(function() {

	// $(".topButton").click(function(event) {
	// 	event.preventDefault();
	// 	$("html, body").animate({ scrollTop: 0}, 800);
	// 	return false;
	// });

	$(".portfolioTopButton").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $("#portfolioTop").offset().top}, 800);
		return false;
	});

	$(".contactTopButton").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $("#ContactSection").offset().top}, 800);
		return false;
	});
});