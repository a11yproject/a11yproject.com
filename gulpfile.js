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
		polyfills: 'src/js/**/*.polyfill.js',
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
var { src, dest, watch, series, parallel, lastRun } = require('gulp');
var kss = require('kss');
var rename = require('gulp-rename');

// Scripts
var jshint = require('gulp-jshint');
var terser = require('gulp-terser');

// Styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');
var gulpStylelint = require('gulp-stylelint');
var purgeCSS = require('gulp-purgecss');

sass.compiler = require('sass');

// SVGs
var svgmin = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprite');

// BrowserSync
var browserSync = require('browser-sync').create();


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

// Lint, minify, and concatenate scripts
var buildScripts = function (done) {
	// Make sure this feature is activated before running
	if (!settings.scripts) return done();
	// Run tasks on script files
	var scriptSrc = [paths.scripts.input];
	if (!settings.polyfills) {
		scriptSrc.push('!' + paths.scripts.polyfills);
	}
	return src(scriptSrc, { since: lastRun(buildScripts) })
		.pipe(terser())
		.pipe(rename({ suffix: '.min'}))
		.pipe(dest(paths.scripts.output));
};


// Lint scripts
var lintScripts = function (done) {
	// Make sure this feature is activated before running
	if (!settings.lint) return done();
	// Lint scripts
	return src(paths.scripts.input, { since: lastRun(lintScripts) })
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
};

// Process, lint, and minify Sass files
var buildStyles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.styles) return done();
	// Run tasks on all Sass files
	return src(paths.styles.input)
		.pipe(sass.sync({
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
		.pipe(dest(paths.styles.output))
		.pipe(browserSync.stream());
};


// Lint styles
var lintStyles = function (done) {
	// Make sure this feature is activated before running
	if (!settings.lint) return done();
	// Lint scripts
	return src(paths.styles.input, { since: lastRun(lintStyles) })
		.pipe(gulpStylelint({
			reporters: [
				{ formatter: 'string', console: true }
			]
		}));
};


// Process images
var processImages = function (done) {
	// Make sure this feature is activated before running
	if (!settings.images) return done();
	return src(paths.images.input, { since: lastRun(processImages) })
		.pipe(dest(paths.images.output));
};


// Process icons
var processIcons = function (done) {
	// Make sure this feature is activated before running
	if (!settings.icons) return done();
	return src(paths.icons.input)
		.pipe(svgSprite(configIcons))
		.pipe(dest(paths.icons.output));
};


// Optimize SVG files
var buildSVGs = function (done) {
	// Make sure this feature is activated before running
	if (!settings.svgs) return done();
	// Optimize SVG files
	return src(paths.svgs.input, { since: lastRun(buildSVGs) })
		.pipe(svgmin())
		.pipe(dest(paths.svgs.output));
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
	done();
};


// Reload the browser when files change
var reloadBrowser = function (done) {
	if (!settings.reload) return done();
	browserSync.reload();
	done();
};

var styles = parallel(lintStyles, buildStyles);
var scripts = parallel(lintScripts, buildScripts);

// Watch for changes
var watchSource = function() {
	watch(paths.styles.input, styles);
	watch(paths.scripts.input, series(scripts, reloadBrowser));
	watch(paths.images.input, series(processImages, reloadBrowser));
	watch(paths.icons.input, series(processIcons, reloadBrowser));
	watch(paths.svgs.input, series(buildSVGs, reloadBrowser));
	watch('./dist/**/*.html', reloadBrowser);
};


// Export Tasks ///////////////////////////////////////////////////////////////

// Default task: `gulp`
exports.default =  parallel(
		styles,
		scripts,
		processImages,
		processIcons,
		buildSVGs,
		buildStyleguide
	)

// Watch and reload: `gulp watch`
exports.watch = series(
	exports.default,
	startServer,
	watchSource
);
