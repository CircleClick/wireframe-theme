<?php
	get_header();?>


<?php if( have_posts() ):?>
	<?php while ( have_posts() ):?>
		<?php the_post();?>
		
		<div class="container">
			<h1><?php the_title();?></h1>

			<?php if (has_post_thumbnail()): ?>
				<img src="<?php echo get_the_post_thumbnail_url(null, 'full'); ?>" >
			<?php endif; ?>

			<?php the_content();?>
		</div>
	<?php endwhile;?>
<?php else: ?>
	<h1>There's nothing here.</h1>
<?php endif;?>

<?php get_footer();?>