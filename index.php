
	
	<?php
	add_filter('body_class', 'page_body_classes');
	function page_body_classes($classes)
	{
		$classes[] = 'navbar--padding navbar--fixed';
		return $classes;
	}

	get_header(); ?>
<div id="main">
		<div class="container justify-items-center">
			<?php get_template_part('partials/hero'); ?>
			<div class="container text-center">
			<?php
				if(have_posts() ){
					while(have_posts() ){
						the_post();
						the_content();
					}
				}
			?>
			</div>
		</div> <!--CONTAINER-->
</div><!-- MAIN--> 
<?php get_footer(); ?>