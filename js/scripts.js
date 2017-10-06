$(document).ready(function() {

	var isArrowDown = true;

	$(".portfolioTopButton").click(function(event) {
		event.preventDefault();

		if (isArrowDown) { // expand the portfolio automatically and scroll to it, else just do the rest.
			$("#arrowDown").click();
		}

		$("html, body").animate({ scrollTop: $("#portfolioTop").offset().top}, 800);
		return false;
	});

	$(".contactTopButton").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $("#ContactSection").offset().top}, 800);
		return false;
	});

	$("#arrowDown").click(function(event) {
		if (isArrowDown) {
			isArrowDown = false;
			
		} else {
			isArrowDown = true;
		}
		$("#changeArrow").toggleClass('fa-angle-down').toggleClass('fa-angle-up');
		
	});
});