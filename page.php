<?php

add_filter('body_class', 'page_body_classes');
function page_body_classes($classes)
{

	$classes[] = 'navbar--padding';

	return $classes;
}

get_header(); ?>


<?php if (have_posts()) : ?>
	<?php while (have_posts()) : ?>
		<div class="container">
			<?php the_post(); ?>


			<?php the_content(); ?>
		</div>
	<?php endwhile; ?>


<?php else : ?>
	<h1>There's nothing here.</h1>
<?php endif; ?>

</div>

<?php get_footer(); ?>