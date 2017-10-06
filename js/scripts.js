$(document).ready(function() {

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

	var isArrowDown = true;

	$("#arrowDown").click(function(event) {
		if (isArrowDown) {
			isArrowDown = false;
			
		} else {
			isArrowDown = true;
		}
		$("#changeArrow").toggleClass('fa-angle-down').toggleClass('fa-angle-up');
		
	});
});