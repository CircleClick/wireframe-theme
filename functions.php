<?php

function theme_scripts()
{
	$cssVersion = @filemtime(get_template_directory() . '/assets/css/main.min.css');
	wp_enqueue_style('main_css', get_template_directory_uri() . '/assets/css/main.min.css?v=' . $cssVersion);
	wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css');
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


// Update the class names in the nav
function cc_update_main_nav_item_classes($classes, $item, $args)
{
	if ($args->theme_location === 'main-menu') {
		$classes[] = 'navbar__menu-item';
		$classes[] = 'navbar--hamburger__menu-item';
		$classes[] = 'navbar--dropdowns__menu-item';
	}
	return $classes;
}
add_filter('nav_menu_css_class', 'cc_update_main_nav_item_classes', 10, 3);

// Update the submenu class names in the nav
function cc_update_main_nav_submenu_classes($classes, $args, $depth)
{
	if ($args->theme_location === 'main-menu') {
		$classes[] = 'navbar__sub-menu';
		$classes[] = 'navbar--hamburger__sub-menu';
		$classes[] = 'navbar--dropdowns__sub-menu';
	}
	return $classes;
}
add_filter('nav_menu_submenu_css_class', 'cc_update_main_nav_submenu_classes', 10, 3);


if (function_exists('acf_add_options_page')) {

	acf_add_options_page(array(
		'page_title' 	=> 'Social Settings',
		'menu_title'	=> 'Social Settings',
		'menu_slug' 	=> 'social-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

////////////////////////////////////////////////
//////////// page metadata /////////////////////
////////////////////////////////////////////////
function cc_custom_page_title()
{
	$site_title = get_bloginfo('name');
	$acf_site_title = get_field('site_name', 'option');
	if ($acf_site_title && $acf_site_title !== '') {
		$site_title = $acf_site_title;
	}

	$site_tagline = get_bloginfo('description');
	$acf_site_tagline = get_field('site_description', 'option');
	if ($acf_site_tagline && $acf_site_tagline !== '') {
		$site_tagline = $acf_site_tagline;
	}


	$site_separator = get_field('site_separator', 'option');
	if (!$site_separator || $site_separator === '') {
		$site_separator = '-';
	}

	$page_title = get_the_title();
	$acf_page_title = get_field('page_title');
	if ($acf_page_title && $acf_page_title !== '') {
		$page_title = $acf_page_title;
	}


	$title = '';

	if ($page_title && $page_title !== '') {
		$title = $page_title;
		if (!$acf_page_title || $acf_page_title == '') {
			$title .= ' ' . $site_separator . ' ' . $site_title;
		}
	} else {
		$title = $site_title . ' ' . $site_separator . ' ' . $site_tagline;
	}

?>
	<title><?php echo $title; ?></title>
<?php
}

function cc_custom_page_description()
{
	$page_description = get_the_excerpt();
	$acf_page_description = get_field('page_description');
	if ($acf_page_description && $acf_page_description !== '') {
		$page_description = $acf_page_description;
	}

	$description = '';

	if ($page_description && $page_description !== '') {
		$description = $page_description;
		if (!$acf_page_description || $acf_page_description == '') {
			$description .= ' ' . $site_separator . ' ' . $site_description;
		}
	} else {
		$description = $site_tagline;
	}

?>
	<meta name="description" content="<?php echo $description; ?>">
<?php
}

function cc_custom_page_metadata()
{
	cc_custom_page_title();
	cc_custom_page_description();
}
add_action('wp_head', 'cc_custom_page_metadata');
