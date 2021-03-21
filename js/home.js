$("#profile-pic-pane").on("mouseenter", function() {
	$("#profile-pic-pane img").attr("src", "img/home/quote.png");
});

$("#profile-pic-pane").on("mouseleave", function() {
	$("#profile-pic-pane img").attr("src", "img/home/profile.png");
});