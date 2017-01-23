<?php get_header();?>

<section class="section section-dark section-hero">
	<div class="row container-xl">
		<div class="image columns medium-5">
			<!-- <img id="heart-svg" src="<?php echo get_stylesheet_directory_uri();?>/assets/img/heart-animated.svg" alt="heart"> -->
			<object type="image/svg+xml" data="<?php echo get_stylesheet_directory_uri();?>/assets/img/heart-animated.svg"></object>
		</div>
		<div class="text columns medium-7">
			<div class="">
				<ul class="bxslider">
					<li><h1 class="huge"><span class="thin">Harmoniously</span> <span class="primary">Disruptive</span></h1></li>
					<li><h1 class="huge"><span class="thin">Methodically</span> <span class="primary">Creative</span></h1></li>
					<li><h1 class="huge"><span class="thin">Passionately</span> <span class="primary">Analytical</span></h1></li>
					<li><h1 class="huge"><span class="thin">Magically</span> <span class="primary">Connective</span></h1></li>
				</ul>
			</div>
			<h2 class="huge-sub">We are a full-service digital marketing consultancy and lab.</h2>
		</div>
	</div>
	<div class="transition black-to-white"></div>
</section>

<section class="section less-padding">
	<div class="container-md">
		<div class="icons space-evenly pad-bottom">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/gears.svg" alt="Gears">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/thumbsup.svg" alt="thumbsup">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/megaphone.svg" alt="megaphone">
		</div>
		<p class="xxl anim-in" data-emergence="hidden">We leverage every platform to <strong class="primary">build</strong>, <strong class="primary">measure</strong>, and <strong class="primary">amplify</strong> your story.</p>
	</div>
	<div class="transition white-to-pink"></div>
</section>

<section class="section section-primary less-padding">
	<div class="row aligned container-xl">
		<div class="columns medium-4 pad-right center-sm icon-col">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/lightbulb.svg" alt="Lightbulb">
		</div>
		<div class="columns medium-8 pad-top">
			<p class="xxl anim-in" data-emergence="hidden"">Our senior-level team turns your <strong>data and ideas</strong> into <strong>actionable insights</strong> and <strong>relevant content</strong> with our applied marketing lab.</p>
		</div>
	</div>
</section>

<section class="section section-dark section-clients fixed-bg">
	<div class="transition pink-to-black"></div>
	<div class="container-lg pad-bottom">
		<p class="xxl center-sm anim-in" data-emergence="hidden""><strong>We’re proud to solve interesting problems for pioneering companies.</strong></p>
	</div>
	<div class="logos pad-bottom">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-uploadvr.png" alt="UploadVR" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-uploadvr@2x.png 2x">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-samsung.png" alt="Samsung" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-samsung@2x.png 2x">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-idg.png" alt="IDG" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-idg@2x.png 2x">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-socrata.png" alt="Socrata" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-socrata@2x.png 2x">
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-nomiku.png" alt="Nomiku" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-nomiku@2x.png 2x">
		<!-- <img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-sevenhugs.png" alt="Sevenhugs" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-sevenhugs@2x.png 2x"> -->
		<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-oreilly.png" alt="O'Reilly Media" srcset="<?php echo get_stylesheet_directory_uri();?>/assets/img/logo-oreilly@2x.png 2x">
	</div>
	<div class="transition black-to-white-alt"></div>
</section>
	
<section class="section">
	<div class="row container-xl">
		<div class="columns medium-4 pad-right icon-col">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/cat-flipped.svg" alt="Cat">
		</div>
		<div class="columns medium-8">
			<h3 class="xxl"><strong>Relevance in the Age of New Media</strong></h3>
			<p class="lg">We’re equal parts <span class="primary">art</span> and <span class="primary">science</span>. Our passion for <em>methodical storytelling</em> connects your brand with your customers — and keeps them engaged.</p>
			<p><a href="/services" class="button button-lg">View our services <i class="fa fa-caret-right"></i></a></p>		
		</div>
	</div>
	<div class="transition white-to-pink"></div>
</section>

<?php get_template_part('partials/section-social');?>

<section class="section section-dark section-footer">
	<div class="transition pink-to-black"></div>

	<div class="container-lg">
		<h3 class="huge">What next?</h3>
		<ul class="big-links row container-lg">
			<li class="columns medium-6"><a href="/about">Learn about who we are &nbsp;<i class="fa fa-caret-right"></i></a></li>
			<li class="columns medium-6"><a href="/contact">Get in touch about a project &nbsp;<i class="fa fa-caret-right"></i></a></li>
		</ul>
	</div>
</section>


<?php get_footer();?>