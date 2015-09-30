var gulp      = require('gulp');
var config    = require('../../config').optimize.css;
var handleErrors = require('../../util/handleErrors');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var size      = require('gulp-size');

var post_cssnano = require('cssnano');

var processors = [
  post_cssnano()
];

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(plumber(handleErrors))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
