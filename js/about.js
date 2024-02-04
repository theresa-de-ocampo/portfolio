// jshint esversion: 6
const phrases = ["Polytechnic University of the Philippines, Sta. Mesa", "Bachelor of Science in Information Technology (BSIT)"];
let educDetails = document.getElementById("educ-details");
const textEffects = new TextScramble(educDetails);
let counter = 0;

const scrambleIterator = () => {
	textEffects.setText(phrases[counter]).then(() => {
		setTimeout(scrambleIterator, 1800);
	});
	counter = (counter + 1) % phrases.length;
};

$("#personal-tags").on("mouseenter", function(e) {
	let $ripple = $("<div class='ripple'></div>");
	$personalTags = $(this);
	$personalTags.append($ripple);

	let x = e.pageX - $personalTags.offset().left;
	let y = e.pageY - $personalTags.offset().top;
	

	$ripple.css({
		"left": x + "px",
		"top": y + "px"
	});

	setTimeout(() => {
		$ripple.remove();
	}, 1000);
});

function centerToViewport() {
	let vw = $(window).outerWidth(true);
	let vh = $(window).outerHeight(true);
	let $divToCenter = $("#about .vertically-center");
	
	if (($divToCenter.outerWidth(true) | 0 <= vw) && ($divToCenter.outerHeight(true) | 0 <= vh)) {
		$divToCenter.css({
			"left": "50%",
			"margin": "initial",
			"position": "absolute", 
			"top": "50%", 
			"transform": "translate(-50%, -50%)"
		});
	}
	else {
		$divToCenter.css({
			"left": "unset",
			"margin": "unset",
			"position": "unset", 
			"top": "unset", 
			"transform": "unset"
		});
	}
}

function setSchoolAndCourse() {
	if ($(window).innerWidth() <= 500) {
		$("#educ-details").html("<h4>PUP, Sta. Mesa | BSIT</h4>");
	}
	else {
		scrambleIterator();
	}
}

$(window).on("load resize", function() {
	setSchoolAndCourse();
	centerToViewport();
});