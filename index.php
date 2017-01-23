<?php get_header();?>

	
<?php if( have_posts() ):?>
	<?php while ( have_posts() ):?>

	<?php the_post();?>

		<?php the_content();?>

	<?php endwhile;?>


	<?php else: ?>

		<h1>There's nothing here.</h1>

	<?php endif;?>

</div>

<?php get_footer();?>