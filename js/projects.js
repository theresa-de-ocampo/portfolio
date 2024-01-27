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
		autoplayTimeout: 6000,
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
						<h5>Account Management</h5>
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
						<h5>Tables</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Print</li>
							<li>Export to CSV</li>
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
						<h5>Households</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Displays lists of household</li>
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

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Posts</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Post a new article</li>
							<li>Edit a published article</li>
							<li>Unpublish an article</li>
							<li>Every change made is reflected on the public site</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Archives</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Displays history of officers</li>
							<li>
								Displays list of archived residents
								<ul>
									<li>Restore archived resident</li>
								</ul>
							</li>
							<li>Displays list of unoccupied units</li>
							<li>Displays list of resolved blotter cases</li>
							<li>View blotter case details</li>
							<li>
								Displays lists of unpublished posts
								<ul>
									<li>View an unpublished article</li>
									<li>Restore a deleted post</li>
								</ul>
							</li>
						</ul>
					</div><!-- .panel -->
				</div><!-- .content -->
			</div><!-- #admin-bmms-modal -->
		`);

	let andrionModal = createModal("#andrion .details");
	andrionModal.setContent(`
			<div id="andrion-modal">
				<h4>Features</h4>
				<div class="content">
					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Account Management</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Password update</li>
							<li>Password recovery through Gmail</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Home</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Customer Details</li>
							<li>
								Rent Details
								<ul>
									<li>
										Prevents a customer from renting an item if it is not available during the period that it will be rented <i>(similar to reservation)</i>
									</li>
								</ul>
							</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Inventory</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Add new equipment per category <i>(Buffet Line, Dining Furniture, Flatware, etc)</i></li>
							<li>Increase an existing items' quantity</li>
							<li>
								Decrease an existing items' quantity
								<ul>
									<li>Prompts for an <b>Equipment Incident Report</b> that is automatically mailed to the owner</li>
								</ul>
							</li>
						</ul>
					</div><!-- .panel -->

					<div class="header inactive">
						<div class="fas fa-plus-circle"></div>
						<h5>Pick-Up Dates</h5>
					</div><!-- .header -->
					<div class="panel">
						<ul>
							<li>Prompts for an <b>Equipment Return Form</b></li>
							<li>Prompts for an <b>Equipment Incident Report</b> if the customer was unable to return every rented item</li>
						</ul>
					</div><!-- .panel -->
				</div><!-- .content -->
			</div><!-- #andrion-modal -->
		`);

	$(".modal .header").on("click", function() {
		$header = $(this);
		$icon = $header.children(".fas");
		$panel = $header.next();
		
		if ($panel.css("max-height") != "0px") {
			$panel.css({
				"margin-bottom": "0",
				"max-height": "0"
			});
			$header.removeClass("active");
			$header.addClass("inactive");
			$icon.removeClass("fa-minus-circle");
			$icon.addClass("fa-plus-circle");
		}
		else {
			$panel.css({
				"margin-bottom": "20px",
				"max-height": "unset"
			});
			$header.removeClass("inactive");
			$header.addClass("active");
			$icon.removeClass("fa-plus-circle");
			$icon.addClass("fa-minus-circle");
		}
	});
});