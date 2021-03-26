// jshint esversion: 6
$(function() {
	let $carousel = $(".owl-carousel");
	$carousel.owlCarousel({
		items: 1,
		loop: true,
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		autoplay: true,
		dots: true,
		autoplayTimeout: 2800,
		autoplayHoverPause: true
	});

	function createModal(selector) {
		let modal = new tingle.modal({
			footer: false,
			stickyFooter: false,
			cssClass: ["modal"],
			closeMethods: ["overlay", "button", "escape"],
			closeLabel: "Close",
			beforeClose: function() {
				return true;
			}
		});

		$(selector).on("click", function(e) {
			modal.open();
			e.preventDefault();
		});
		return modal;
	}
	
	let adminBmmsModal = createModal("#admin-bmms .details");
	adminBmmsModal.setContent(`
			<div id="admin-bmms-modal">
				<h4>Features</h4>

				<div class="content">
					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Login & Account Management</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Password update</li>
							<li>Strong password requirement</li>
							<li>Only the master admin can create and revoke an account for the officers</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Dashboard</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Population Groupings</li>
							<li>
								Officials
								<ul>
									<li>Displays list of current officials</li>
									<li>Insert new cycle</li>
									<li>Terminate an official</li>
								</ul>
							</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Residents</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Displays list of residents</li>
							<li>Register a new resident</li>
							<li>Update information of a resident</li>
							<li>Archive a resident</li>
							<li>Search residents by any attribute (first name, last name, age, house number, etc.)</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Household</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Displays lists of residents</li>
							<li>
								Provision for copying the address (house number and street to clipboard) – used for filtering the list of residents based on where they live.
							</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Blotter</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Displays list of pending cases</li>
							<li>View case details</li>
							<li>Insert a new case</li>
							<li>Search a case by any attribute (complainant name, complained resident name, etc.)</li>
							<li>Settle a pending case</li>
						</ul>
					</div><!-- .panel -->


				</div><!-- .content -->
			</div><!-- #admin-bmms-modal -->
		`);

	let andrionModal = createModal("#andrion .details");
	andrionModal.setContent(`<h4>Access</h4>`);

	$(".modal .header").on("click", function() {
		/*$(".tingle-modal--overflow").css("overflow-y", "scroll");
		$(".tingle-modal--overflow").css("overflow-y", "scroll");
		$(".tingle-modal").checkOverflow();*/
		adminBmmsModal.checkOverflow();
		$header = $(this);
		$panel = $header.next();
		
		if ($panel.css("max-height") != "0px") {
			$panel.css({
				"margin-bottom": "0",
				"max-height": "0"
			});
			$header.removeClass("active");
			$header.addClass("inactive");
		}
		else {
			$panel.css({
				"margin-bottom": "20px",
				"max-height": "unset"
			});
			$header.removeClass("inactive");
			$header.addClass("active");
		}
	});
});