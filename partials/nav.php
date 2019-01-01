<div class="navbar__screen-overlay" id="navbar-screen-overlay"></div>

<div class="container">
	<div class="row">
	
		<div class="col-md-3">
			<?php wp_nav_menu([
				'theme_location' => 'main-menu',
				'container' => false,
				'menu_class' => 'navbar__menu',
			]);?>
		</div>
	
		<div class="col-md-6">
			<?php wp_nav_menu([
				'theme_location' => 'main-menu',
				'container' => false,
				'menu_class' => 'navbar__menu',
			]);?>
		</div>

		<div class="col-md-3">
			<div class="navbar__toggle" id="navbar-toggle">
				<i class="fas fa-bars"></i>
			</div>
		</div>

	</div>
</div>