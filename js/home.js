$("#profile-pic-pane").on("mouseenter", function() {
	$("#profile-picture").css("display", "none");
	$("#quote").css("display", "inline");
});

$("#profile-pic-pane").on("mouseleave", function() {
	$("#quote").css("display", "none");
	$("#profile-picture").css("display", "inline");
});