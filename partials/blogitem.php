<div class="container blogitem__container">
    <div class="row">
        <div class="blogitem__thumbnail col-md-4">
            <a href="<?php the_permalink(); ?>">
                <img src="<?php echo get_the_post_thumbnail_url(null, 'medium'); ?>" >
            </a>
        </div>
        <div class="blogitem__description col-md-8">
            <a href="<?php the_permalink(); ?>">
                <h2><?php the_title(); ?></h2>
            </a>
            <?php the_excerpt(); ?>
            <a href="<?php the_permalink() ?>">Read more &raquo;</a>
        </div>
    </div>
</div>