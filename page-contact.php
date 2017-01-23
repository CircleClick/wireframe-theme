<?php get_header();?>

<section class="section section-dark section-hero-header">
	<div class="row container-md">
<!-- 		<div class="image columns large-3">
			<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/megaphone.svg" alt="megaphone">
		</div> -->
		<div class="text columns large-12">
			<h1 class="huge">Get in touch</h1>
			<h2 class="huge-sub primary">Let's build something new.</h2>
		</div>
	</div>
	<div class="transition black-to-white"></div>
</section>
	
<section class="section lesserer-padding">
	<div class="container-md">
		<h3>Ready for integrated marketing that cuts through the noise? Use the fields below to get in touch with the right team member.</h3>
		<div class="contact-form">
			<?php echo do_shortcode('[contact-form-7 id="20" title="Contact page form"]');?>
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
			<li class="columns medium-6"><a href="/services">Learn about our services &nbsp;<i class="fa fa-caret-right"></i></a></li>
		</ul>
	</div>
</section>


<?php get_footer();?>