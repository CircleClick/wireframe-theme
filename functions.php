<?php



function theme_scripts() {

	wp_enqueue_style('main_css', get_template_directory_uri().'/assets/css/main.css?v=4');
	wp_enqueue_style('fontawesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
}
add_action('wp_enqueue_scripts', 'theme_scripts');


function theme_setup() {
	/**
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
}
add_action('init', 'theme_setup');