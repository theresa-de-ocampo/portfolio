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
		readfile("about.html")
	?>

	<section id="contact">
		<h4>Features</h4>
			<ol>
				<li>
					Tables
					<ul>
						<li>Provision for printing.</li>
						<li>Provision for exporting to csv.</li>
					</ul>
				</li>
				<li>
					Login & Account Management
					<ul>
						<li>Password update</li>
						<li>Strong password requirement.</li>
						<li>Only the master admin can create and revoke an account for the officers.</li>
					</ul>
				</li>
				<li>
					Dashboard
					<ul>
						<li>Population groupings</li>
						<li>
							Officials
							<ul>
								<li>List of current officials</li>
								<li>Insert new cycle</li>
								<li>Terminate an official</li>
							</ul>
						</li>
					</ul>
				</li>
			</ol>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum, nunc eu lobortis pharetra, metus purus tristique eros, sed efficitur augue sapien et lacus. Praesent sed ultricies felis. Duis ligula mauris, consequat et mattis vitae, congue ac tortor. Integer hendrerit arcu in risus pellentesque, ac fringilla odio euismod. Quisque tincidunt, enim quis accumsan semper, elit neque aliquet lacus, vel pharetra nulla sem sit amet ligula. Praesent consectetur quam pharetra ex molestie maximus. Nam gravida euismod leo, sit amet interdum eros facilisis rhoncus. Morbi ac eleifend risus. Duis in dictum sapien. Duis fermentum eu leo ut lobortis. Donec non ipsum felis. Duis libero nunc, efficitur vitae efficitur a, condimentum at libero. Donec ac urna vel magna lobortis laoreet.
		</p>

		<p>
			Donec laoreet, magna vitae egestas suscipit, lectus dolor lobortis magna, nec gravida diam tellus aliquet sem. Quisque semper tristique risus in elementum. Praesent nec pellentesque quam, non semper dolor. Curabitur a efficitur orci, ac semper nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet finibus felis, nec consectetur urna. In ullamcorper imperdiet nibh. Suspendisse mattis, nibh a dictum iaculis, elit sem mattis eros, eget rutrum magna ante ut tellus. Nullam dapibus orci nunc, ut tempus nunc maximus sit amet. Proin mollis eget arcu commodo mattis. Nullam in ullamcorper leo, id porta diam.
		</p>

		<p>
			Sed id magna iaculis, varius eros at, molestie libero. Sed non arcu libero. Nam vitae tellus eget libero laoreet gravida. Mauris sit amet egestas leo. Nam vestibulum fringilla enim eget faucibus. Nunc sem urna, pharetra eu tellus ultricies, efficitur luctus nulla. Nulla non augue laoreet, tristique nisi nec, tincidunt velit. Duis vitae dapibus nulla.
		</p>

		<p>
			Ut efficitur hendrerit lacus, ac euismod odio. Donec maximus tincidunt tortor sed posuere. Mauris volutpat, nunc porttitor laoreet lacinia, elit tellus eleifend nulla, id fermentum odio elit vestibulum dui. Quisque pulvinar velit turpis, mollis vulputate nisl interdum vel. Suspendisse at ligula eu magna iaculis laoreet. Aenean ornare, arcu sit amet efficitur laoreet, libero nisl pharetra augue, eu pellentesque nibh nulla et nulla. Morbi elit nisi, suscipit vulputate gravida non, venenatis vel quam. Morbi pulvinar iaculis molestie.
		</p>
	</section><!-- #skills -->
	
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