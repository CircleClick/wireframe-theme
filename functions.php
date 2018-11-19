<?php

function theme_scripts() {
	$cssVersion = @filemtime(get_template_directory() .'/assets/css/main.min.css');
	wp_enqueue_style('main_css', get_template_directory_uri().'/assets/css/main.min.css?v='.$cssVersion);
	wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
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


/*================ MENUS ================*/
function cc_register_nav_menus() {
	register_nav_menus([
		'main-menu' => 'Main Menu',
		'footer-menu' => 'Footer Menu',
		'legal-menu' => 'Legal Menu',
	]);
}
add_action('after_setup_theme', 'cc_register_nav_menus');


// Update the class names in the nav
function cc_update_main_nav_item_classes($classes, $item, $args) {
	if ($args->theme_location === 'main-menu') {
		$classes[] = 'navbar__menu-item';
		$classes[] = 'navbar--hamburger__menu-item';
		$classes[] = 'navbar--dropdowns__menu-item';
	}
	return $classes;
}
add_filter('nav_menu_css_class', 'cc_update_main_nav_item_classes', 10, 3);

// Update the submenu class names in the nav
function cc_update_main_nav_submenu_classes($classes, $args, $depth) {
	if ($args->theme_location === 'main-menu') {
		$classes[] = 'navbar__sub-menu';
		$classes[] = 'navbar--hamburger__sub-menu';
		$classes[] = 'navbar--dropdowns__sub-menu';
	}
	return $classes;
}
add_filter('nav_menu_submenu_css_class', 'cc_update_main_nav_submenu_classes', 10, 3);
