<?php

add_filter('body_class', 'page_body_classes');
function page_body_classes($classes)
{
	$classes[] = 'navbar--padding navbar--fixed';
	return $classes;
}

get_header(); ?>


<?php if (have_posts()) : ?>
	<?php while (have_posts()) : ?>
		<?php the_post(); ?>

		<?php if (!is_front_page() && is_home()) : ?>
			<?php get_template_part('partials/blogitem'); ?>
		<?php else : ?>
			<div class="md:flex">
				<h1><?php the_title(); ?></h1>

				<?php if (has_post_thumbnail()) : ?>
					<img src="<?php echo get_the_post_thumbnail_url(null, 'full'); ?>">
				<?php endif; ?>

				<?php the_content(); ?>
			</div>
		<?php endif; ?>
	<?php endwhile; ?>
<?php else : ?>
	<h1>There's nothing here.</h1>
<?php endif; ?>

<?php get_footer(); ?>