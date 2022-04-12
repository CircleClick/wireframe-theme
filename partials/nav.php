<div class="navbar__screen-overlay" id="navbar-screen-overlay">
	<header class="navbar__container">
	<nav class="navbar__items flex" id="navbar-nav">
		<?php wp_nav_menu([
			'theme_location' => 'main-menu',
			'container' => false,
			'menu_class' => 'navbar__menu',
		]);?>
		<li class="mr-6">
			<a class="text-grey">Home</a>
		</li>
	</nav>

	<div class="navbar__toggle" id="navbar-toggle">
		<i class="fas fa-bars"></i>
	</div>

	<div class="navbar__bg bg-yellow-800"></div>
</div>
</header>