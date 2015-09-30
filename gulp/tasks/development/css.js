var gulp = require('gulp');
var config = require('../../config');
var handleErrors = require('../../util/handleErrors');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var post_atimport = require('postcss-import');
var post_autoprefixer = require('autoprefixer');
var post_customprops = require('postcss-custom-properties');
var post_lost = require('lost');
var post_mqpacker = require('css-mqpacker');
var post_nested = require('postcss-nested');
var post_nested_props = require('postcss-nested-props');


var processors = [
  post_atimport(),
  post_autoprefixer(config.autoprefixer),
  post_customprops(),
  post_lost(),
  post_mqpacker(),
  post_nested_props(),
  post_nested(),
];

gulp.task('css', function() {

  return gulp.src(config.css.src)
    .pipe(plumber(handleErrors))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.css.dest));
});
