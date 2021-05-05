<?php

function theme_scripts()
{
	$cssVersion = @filemtime(get_template_directory() . '/dist/style.min.css');
	wp_enqueue_style('main_css', get_template_directory_uri() . '/dist/style.min.css?v=' . $cssVersion);

	$jsVersion = @filemtime(get_template_directory() . '/dist/main.min.js');
	wp_enqueue_script('main_js', get_template_directory_uri() . '/dist/main.min.js?v=' . $jsVersion);
}
add_action('wp_enqueue_scripts', 'theme_scripts');


function theme_setup()
{
	/**
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	//add_theme_support( 'title-tag' );
	add_theme_support('post-thumbnails');
}
add_action('init', 'theme_setup');


/*================ MENUS ================*/
function cc_register_nav_menus()
{
	register_nav_menus([
		'main-menu' => 'Main Menu',
		'footer-menu' => 'Footer Menu',
		'legal-menu' => 'Legal Menu',
	]);
}
add_action('after_setup_theme', 'cc_register_nav_menus');

