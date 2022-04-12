<?php get_template_part('partials/nav'); ?>
	<?php
	add_filter('body_class', 'page_body_classes');
	function page_body_classes($classes)
	{
		$classes[] = 'navbar--padding navbar--fixed';
		return $classes;
	}

	get_header(); ?>

<?php get_header();?>

<div id="main">
		<div class="container flex justify-items-center">
			<?php get_template_part('partials/hero'); ?>
		</div> <!--CONTAINER-->
</div><!-- MAIN--> 
<?php get_footer(); ?>