<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="author" content="Theresa De Ocampo" />
	<meta name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/all.css" />
	<link rel="stylesheet" type="text/css" href="css/aos.css" />
	<link rel="stylesheet" type="text/css" href="css/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="css/owl.theme.default.min.css">
	<link rel="stylesheet" type="text/css" href="css/tingle.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" type="text/css" href="css/nav-bar.css" />
	<link rel="stylesheet" type="text/css" href="css/home.css" />
	<link rel="stylesheet" type="text/css" href="css/skills.css" />
	<link rel="stylesheet" type="text/css" href="css/projects.css" />
	<link rel="stylesheet" type="text/css" href="css/about.css" />
	<link rel="stylesheet" type="text/css" href="css/animations.css" />
	<link rel="stylesheet" type="text/css" href="css/media-queries.css" />
	<title>Theresa De Ocampo</title>
</head>
<body>
	<nav>
		<input id="check-menu" type="checkbox" name="check-menu" />
		<label for="check-menu" class="menu-button"><div class="menu-lines"></div></label>
		<ul>
			<li><a href="#home"><span class="border">/</span>Home<span class="border">/</span></a></li>
			<li><a href="#skills"><span class="border">/</span>Skills<span class="border">/</span></a></li>
			<li><a href="#projects"><span class="border">/</span>Projects<span class="border">/</span></a></li>
			<li><a href="#about"><span class="border">/</span>About<span class="border">/</span></a></li>
			<li><a href="#contact"><span class="border">/</span>Contact<span class="border">/</span></a></li>
		</ul>
	</nav>
	
	<?php
		readfile("home.html");
		readfile("skills.html");
		readfile("projects.html");
		readfile("about.html");
	?>
	
	<script src="js/jquery-3.5.1.min.js"></script>
	<script src="js/aos.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/tingle.min.js"></script>
	<script src="js/scramble.js"></script>
	<script src="js/all.js"></script>
	<script src="js/home.js"></script>
	<script src="js/projects.js"></script>
	<script src="js/about.js"></script>
</body>
</html>