<div class="navbar__screen-overlay" id="navbar-screen-overlay"></div>

<header class="navbar__container">
	<nav class="navbar__items" id="navbar-nav">
		<?php wp_nav_menu([
			'theme_location' => 'main-menu',
			'container' => false,
			'menu_class' => 'navbar__menu',
		]);?>
	</nav>

	<div class="navbar__toggle" id="navbar-toggle">
		<i class="fas fa-bars"></i>
	</div>

	<div class="navbar__bg"></div>
</header>