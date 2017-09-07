$("a[href='top']").click(function() {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

$("#Resume").click(function() {
	location.href = "https://docs.google.com/document/d/1wj6fSjhIu2e_XTZJWQaO59rVxX4a8hrq8GVfeEHtzY0/edit?usp=sharing";
});

$("#GitHub").click(function() {
	location.href = "https://www.github.com/alansdpark";
});

$("#LinkedIn").click(function() {
	location.href = "https://www.linkedin.com/in/alan-p-568987139";
});