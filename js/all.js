// jshint esversion: 6
AOS.init({
	once: true
});

$("nav ul li a").on("click", function(){
	$("#check-menu").prop("checked", false);
});