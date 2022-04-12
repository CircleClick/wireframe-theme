<!DOCTYPE html>
<html lang="en">

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- favicons etc -->
	<link rel="apple-touch-icon" sizes="256x256" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon/favicon-256x256.png">
	<link rel="icon" type="image/png" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon/manifest.json">
	<meta name="theme-color" content="#ffffff">
	<!--<link rel="mask-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/favicon/favicon.svg" color="#fc00ae">-->
		<!-- Vanta Import-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
	<!-- <div id="birdsBg">
		<script>
			VANTA.BIRDS({
			el: "#birdsBg",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			scaleMobile: 1.00
			})
		</script>
	</div> -->
	<?php get_template_part('partials/nav'); ?>
