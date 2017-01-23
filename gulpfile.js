
var gulp = require('gulp');
var sass = require('gulp-sass');

// default task
gulp.task('default', ['watch']);


// serve locally with auto reload
gulp.task('watch', ['build'], function() {

	gulp.watch(['src/css/*.scss', 'src/css/partials/*.scss'], ['sass']);
	gulp.watch(['src/js/*.js'], ['js']);
	gulp.watch(['src/img/**'], ['images']);
	gulp.watch(['src/fonts/**'], ['fonts']);
});


// compile sass to css
gulp.task('sass', function() {
	return gulp.src('./src/css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'));
});

// process js files
gulp.task('js', function() {
	return gulp.src('./src/js/**')
		.pipe(gulp.dest('assets/js'))
});

// process image files
gulp.task('images', function() {
	return gulp.src('src/img/**')
		.pipe(gulp.dest('assets/img'))
});

// process font files
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**')
		.pipe(gulp.dest('assets/fonts'))
});

// build for distribution
gulp.task('build', ['sass', 'js', 'images', 'fonts']);





