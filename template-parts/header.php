<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<div class="container fluid bg--white navbar--container" role="banner">
	<div class="container">
		<div class="row flex--center">
			<div class="col-xs-9 padding--v-md">
				<?php the_custom_logo(); ?>
			</div>

			<div class="col-xs-3 text--right font--xl" role="navigation">
				<i class="fas fa-bars" id="nav_toggle"></i>
			</div>
		</div>
	</div>
</div>

<div class="navigation__container">
	<?php wp_nav_menu([
		'theme_location' => 'main-menu',
		'container' => false,
		'menu_class' => 'navbar__menu',
	]);?>
</div>