<section class="section section-primary">
	<h3 class="xxl centered"><strong>What Are We Up To?</strong><br><br></h3>
	<div class="container-lg">
		<div class="row">
			<div class="columns medium-4 small-6">
				<ul class="icons">
					<?php if (get_field('facebook_url', 'option') != null && get_field('facebook_url', 'option') !== '' && get_field('facebook_url', 'option') !== ' '): ?><li><a href="<?php the_field('facebook_url', 'option'); ?>"><i class="fa fa-facebook"></i></a></li><?php endif; ?>
					<?php if (get_field('twitter_url', 'option') != null && get_field('twitter_url', 'option') !== '' && get_field('twitter_url', 'option') !== ' '): ?><li><a href="<?php the_field('twitter_url', 'option'); ?>">"><i class="fa fa-twitter"></i></a></li><?php endif; ?>
				</ul>
			</div>
			<div class="columns medium-4 hide-sm-down" style="text-align: center; padding-left: 28px;">
				<img src="<?php echo get_stylesheet_directory_uri();?>/assets/img/mug.svg" alt="Coffee Mug">
			</div>
			<div class="columns medium-4 small-6">
				<ul class="icons">
					<?php if (get_field('instagram_url', 'option') != null && get_field('instagram_url', 'option') !== '' && get_field('instagram_url', 'option') !== ' '): ?><li><a href="<?php the_field('instagram_url', 'option'); ?>">"><i class="fa fa-instagram"></i></a></li><?php endif; ?>
					<?php if (get_field('linkedin_url', 'option') != null && get_field('linkedin_url', 'option') !== '' && get_field('linkedin_url', 'option') !== ' '): ?><li><a href="<?php the_field('linkedin_url', 'option'); ?>">"><i class="fa fa-linkedin"></i></a></li><?php endif; ?>
				</ul>
			</div>
		</div>
	</div>
</section>