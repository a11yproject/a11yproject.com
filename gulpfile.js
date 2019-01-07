// This file is used to collect and process all the site's assets, to help
// generate the live website. You can read more about Gulp here:
// https://gulpjs.com/

// This setup is based on Chris Ferdinandi's excellent Gulp Boilerplate
// project: https://gomakethings.com/a-new-gulp-boilerplate/


// Settings ///////////////////////////////////////////////////////////////////
// Turn on/off build features
var settings = {
  clean: true,
  scripts: true,
  polyfills: true,
  styles: true,
  lint: true,
  svgs: true,
  copy: true,
  reload: true,
  styleguide: true
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
  svgs: {
    input: 'src/img/**/*.svg',
    output: 'dist/img/'
  },
  reload: './dist/'
};


// Gulp Packages //////////////////////////////////////////////////////////////

// General
var {gulp, src, dest, watch, series, parallel} = require('gulp');
var del = require('del');
var flatmap = require('gulp-flatmap');
var lazypipe = require('lazypipe');
var kss = require('kss');
var rename = require('gulp-rename');

// Scripts
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var optimizejs = require('gulp-optimize-js');

// Styles
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-cssnano');
var gulpStylelint = require('gulp-stylelint');

// SVGs
var svgmin = require('gulp-svgmin');

// BrowserSync
var browserSync = require('browser-sync');


// Tasks //////////////////////////////////////////////////////////////////////

// Keep the `dist/css` folder tidy
var cleanScss = function (done) {
  // Make sure this feature is activated before running
  if (!settings.clean) return done();
  // Clean Sass files out of dist
  del.sync([
    paths.styles.output + '**/*.scss'
  ]);
  // Signal completion
  return done();
};

// Repeated JavaScript tasks
var jsTasks = lazypipe()
  .pipe(optimizejs)
  .pipe(dest, paths.scripts.output)
  .pipe(rename, {suffix: '.min'})
  .pipe(uglify)
  .pipe(optimizejs)
  .pipe(dest, paths.scripts.output);

// Lint, minify, and concatenate scripts
var buildScripts = function (done) {
  // Make sure this feature is activated before running
  if (!settings.scripts) return done();
  // Run tasks on script files
  src(paths.scripts.input)
    .pipe(flatmap(function(stream, file) {
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
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: true
    }))
    .pipe(prefix({
      browsers: ['last 2 version', '> 0.25%'], // TODO: Check if this covers IE
      cascade: true,
      remove: true
    }))
    // .pipe(dest(paths.styles.output))
    .pipe(rename({suffix: '.min'}))
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
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
  // Signal completion
  done();
};

// Optimize SVG files
var buildSVGs = function (done) {
  // Make sure this feature is activated before running
  if (!settings.svgs) return done();
  // Optimize SVG files
  src(paths.svgs.input)
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
    title: "The A11Y Project Styleguide"
  });
  // Signal completion
  done();
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
  cleanScss,
  parallel(
    buildScripts,
    lintScripts,
    // lintStyles,
    buildStyles,
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
