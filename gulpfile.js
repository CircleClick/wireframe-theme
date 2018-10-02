
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');

var cleanCSSConfig = {
	compatibility: 'ie11+',
	level: 2,
};

var webpackConfig = {
	output: {
		filename: 'main.js',
	},
	module: {
		rules: [{
			test: /.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['env'],
				}
			}]
		}]
	}
};

// default task
gulp.task('default', ['watch']);

// browser sync
gulp.task('serve', ['build'], function() {
	browserSync.init({
		proxy: 'cc-next-local:8888',
		ui: false,
		notify: false,
	});

	gulp.watch(['src/scss/*.scss', 'src/scss/*/*.scss'], ['sass-dev']);
	gulp.watch(['src/js/**'], ['js', 'js-vendor']).on('change', browserSync.reload);
	gulp.watch(['src/img/**'], ['images']).on('change', browserSync.reload);
	gulp.watch(['src/fonts/**'], ['fonts']).on('change', browserSync.reload);
	gulp.watch('**/*.php').on('change', browserSync.reload);
});

// watch files for changes
gulp.task('watch', ['build'], function() {

	gulp.watch(['src/scss/*.scss', 'src/scss/*/*.scss'], ['sass-build']);
	gulp.watch(['src/js/**'], ['js']);
	gulp.watch(['src/js/vendor/**'], ['js-vendor']);
	gulp.watch(['src/img/**'], ['images']);
	gulp.watch(['src/fonts/**'], ['fonts']);
});


// compile sass to css with sourcemaps and browsersync
gulp.task('sass-dev', function() {
	return gulp.src('./src/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.stream());
});

// compile sass to css for distribution
gulp.task('sass-build', function() {
	return gulp.src('./src/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
		.pipe(cleanCSS(cleanCSSConfig))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'))
});

// process js files
gulp.task('js', function() {
	return gulp.src('./src/js/main.js')
		.pipe(webpack(webpackConfig))
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(gulp.dest('assets/js'))
});

// copy js vendor files
gulp.task('js-vendor', function() {
	return gulp.src('src/js/vendor/**')
		.pipe(gulp.dest('assets/js/vendor'))
});

// process image files
gulp.task('images', function() {
	return gulp.src('src/img/**')
		.pipe(imagemin({
			options: {
				verbose: true,
			}
		}))
		.pipe(gulp.dest('assets/img'))
});

// process font files
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**')
		.pipe(gulp.dest('assets/fonts'))
});

// build for distribution
gulp.task('build', ['sass-build', 'js', 'js-vendor', 'images', 'fonts']);