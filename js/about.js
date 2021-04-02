// jshint esversion: 6
const phrases = ["Polytechnic University of the Philippines, Sta. Mesa", "Bachelor of Science in Information Technology"];
let educDetails = document.getElementById("educ-details");
const textEffects = new TextScramble(educDetails);
let counter = 0;

const scrambleIterator = () => {
	textEffects.setText(phrases[counter]).then(() => {
		setTimeout(scrambleIterator, 1800);
	});
		counter = (counter + 1) % phrases.length;
	};
scrambleIterator();