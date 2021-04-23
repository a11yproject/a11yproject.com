// This file is used to collect and process all the site's assets, to help
// generate the live website. You can read more about Gulp here:
// https://gulpjs.com/

// This setup is based on Chris Ferdinandi's excellent Gulp Boilerplate
// project: https://gomakethings.com/a-new-gulp-boilerplate/


// Settings ///////////////////////////////////////////////////////////////////
// Turn on/off build features
var settings = {
	clean: true,
	favicons: false,
	icons: true,
	images: true,	lint: true,
	misc: true,
	polyfills: true,
	reload: true,
	scripts: true,
	styleguide: true,
	styles: true,
	svgs: true
};


// Paths to project folders ///////////////////////////////////////////////////
var paths = {
	input: 'src/',
	output: 'dist/',
	scripts: {
		input: 'src/js/**/*.js',
		polyfills: '.polyfill.js',
		output: 'dist/js/'
	},
	styles: {
		input: 'src/css/**/*.scss',
		output: 'dist/css/'
	},
	images: {
		input: 'src/img/**/*.{jpg,jpeg,gif,webm,webp,png}',
		output: 'dist/img/'
	},
	icons: {
		input: 'src/img/icons/*.svg',
		output: 'dist/'
	},
	svgs: {
		input: 'src/img/**/*.svg',
		output: 'dist/img/'
	},
	reload: './dist/'
};


// Gulp Packages //////////////////////////////////////////////////////////////

// General
var { src, dest, watch, series, parallel } = require('gulp');
var flatmap = require('gulp-flatmap');
var lazypipe = require('lazypipe');
var kss = require('kss');
var rename = require('gulp-rename');

// Scripts
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var terser = require('gulp-terser');

// Styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');
var gulpStylelint = require('gulp-stylelint');
var purgeCSS = require('gulp-purgecss');

// SVGs
var svgmin = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprite');

// BrowserSync
var browserSync = require('browser-sync');

// Error Handling
var plumber = require('gulp-plumber');


// Package Config /////////////////////////////////////////////////////////////
var configIcons = {
	mode: {
		symbol: {
			dest: 'img',
			sprite: 'icons.svg',
			example: false
		}
	},
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false
	}
};


// Tasks //////////////////////////////////////////////////////////////////////

// Repeated JavaScript tasks
var jsTasks = lazypipe()
  .pipe(terser)
	.pipe(dest, paths.scripts.output)
	.pipe(rename, { suffix: '.min'})
	.pipe(dest, paths.scripts.output);


// Lint, minify, and concatenate scripts
var buildScripts = function (done) {
	// Make sure this feature is activated before running
	if (!settings.scripts) return done();
	// Run tasks on script files
	src(paths.scripts.input)
		.pipe(plumber())
		.pipe(flatmap(function (stream, file) {
			// If the file is a directory
			if (file.isDirectory()) {
				// Setup a suffix variable
				var suffix = '';
				// If separate polyfill files enabled
				if (settings.polyfills) {
					// Update the suffix
					suffix = '.polyfills';
					// Grab files that aren't polyfills, concatenate them, and process them
					src([file.path + '/*.js', '!' + file.path + '/*' + paths.scripts.polyfills])
						.pipe(concat(file.relative + '.js'))
						.pipe(jsTasks());
				}
				// Grab all files and concatenate them
				// If separate polyfills enabled, this will have .polyfills in the filename
				src(file.path + '/*.js')
					.pipe(concat(file.relative + suffix + '.js'))
					.pipe(jsTasks());
				return stream;
			}
			// Otherwise, process the file
			return stream.pipe(jsTasks());
		}));
	// Signal completion
	done();
};


// Lint scripts
var lintScripts = function (done) {
	// Make sure this feature is activated before running
	if (!settings.lint) return done();
	// Lint scripts
	src(paths.scripts.input)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
	// Signal completion
	done();
};


// Process, lint, and minify Sass files
var buildStyles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.styles) return done();
	// Run tasks on all Sass files
	src(paths.styles.input)
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(purgeCSS({
			content: ['src/**/*.njk', 'src/**/*.md'],
			whitelist: [
			'atrule',
			'attr-name',
			'attr-value',
			'bold',
			'boolean',
			'builtin',
			'cdata',
			'char',
			'comment',
			'constant',
			'deleted',
			'doctype',
			'entity',
			'function',
			'important',
			'inserted',
			'italic',
			'keyword',
			'number',
			'operator',
			'prolog',
			'property',
			'punctuation',
			'regex',
			'selector',
			'string',
			'symbol',
			'tag',
			'token',
			'url',
			'variable'
		],
			whitelistPatterns: [/^c-form/, /h5/],
			whitelistPatternsChildren: [/^c-content/],
		}))
		.pipe(prefix({
			cascade: true,
			remove: true
		}))
		// .pipe(dest(paths.styles.output))
		.pipe(rename({ suffix: '.min'}))
		.pipe(minify({
			discardComments: {
				removeAll: true
			}
		}))
		.pipe(dest(paths.styles.output));
	// Signal completion
	done();
};


// Lint styles
var lintStyles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.lint) return done();
	// Lint scripts
	src(paths.styles.input)
		.pipe(plumber())
		.pipe(gulpStylelint({
			reporters: [
				{ formatter: 'string', console: true }
			]
		}));
	// Signal completion
	done();
};


// Process images
var processImages = function (done) {
	// Make sure this feature is activated before running
	if (!settings.images) return done();
	src(paths.images.input)
		.pipe(plumber())
		.pipe(dest(paths.images.output));
	// Signal completion
	done();
};


// Process icons
var processIcons = function (done) {
	// Make sure this feature is activated before running
	if (!settings.icons) return done();
	src(paths.icons.input)
		.pipe(plumber())
		.pipe(svgSprite(configIcons))
		.pipe(dest(paths.icons.output));
	// Signal completion
	done();
};


// Optimize SVG files
var buildSVGs = function (done) {
	// Make sure this feature is activated before running
	if (!settings.svgs) return done();
	// Optimize SVG files
	src(paths.svgs.input)
		.pipe(plumber())
		.pipe(svgmin())
		.pipe(dest(paths.svgs.output));
	// Signal completion
	done();
};


// Build styleguide
var buildStyleguide = function (done) {
	// Make sure this feature is activated before running
	if (!settings.styleguide) return done();
	// Generate styleguide with these congig options
	return kss({
		css: '../css/screen.min.css',
		destination: 'dist/styleguide',
		placeholder: "[modifier]",
		source: 'src/css',
		title: "Styleguide - The A11Y Project"
	});
};


// Watch for changes to the src directory
var startServer = function (done) {
	// Make sure this feature is activated before running
	if (!settings.reload) return done();
	// Initialize BrowserSync
	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});
	// Signal completion
	done();
};


// Reload the browser when files change
var reloadBrowser = function (done) {
	if (!settings.reload) return done();
	browserSync.reload();
	done();
};


// Watch for changes
var watchSource = function (done) {
	watch(paths.input, series(exports.default, reloadBrowser));
	done();
};


// Export Tasks ///////////////////////////////////////////////////////////////

// Default task: `gulp`
exports.default = series(
	// cleanScss,
	parallel(
		buildScripts,
		lintScripts,
		lintStyles,
		buildStyles,
		processImages,
		processIcons,
		buildSVGs,
		buildStyleguide
	)
);

// Watch and reload: `gulp watch`
exports.watch = series(
	exports.default,
	startServer,
	watchSource
);
