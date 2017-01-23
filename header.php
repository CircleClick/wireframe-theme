<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- favicons etc -->


	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_stylesheet_directory_uri();?>/assets/img/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" href="<?php echo get_stylesheet_directory_uri();?>/assets/img/favicon/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo get_stylesheet_directory_uri();?>/assets/img/favicon/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="<?php echo get_stylesheet_directory_uri();?>/assets/img/favicon/manifest.json">
	<link rel="mask-icon" href="<?php echo get_stylesheet_directory_uri();?>/assets/img/favicon/safari-pinned-tab.svg" color="#fc00ae">
	<meta name="theme-color" content="#ffffff">

	<?php wp_head();?>

</head>
<body class="<?php body_class(); ?>">

<?php get_template_part('partials/nav');?>