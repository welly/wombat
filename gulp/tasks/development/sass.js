var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var config = require('../../config');
var handleErrors = require('../../util/handleErrors');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  return gulp.src(config.sass.src)
    .pipe(plumber(handleErrors))
    .pipe(compass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.sass.dest));
});
