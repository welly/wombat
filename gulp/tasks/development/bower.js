var gulp = require('gulp');
var bowerMain = require('main-bower-files');
var config = require('../../config').bower;
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var handleErrors = require('../../util/handleErrors');

gulp.task('bower', function() {

  var fontFilter = filter(config.font);
  var imageFilter = filter(config.image);
  var jsFilter = filter(config.js);
  var scssFilter = filter(config.scss);

  return gulp.src('src/_bower_components/**/*')

    // JS
    .pipe(jsFilter)
    .pipe(gulp.dest(config.dest + '/javascript'))
    .pipe(jsFilter.restore())

    // SCSS
    // .pipe(scssFilter)
    // .pipe(gulp.dest(config.dest + '/vendor'))
    // .pipe(scssFilter.restore())

    // FONTS
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest + '/fonts'))
    .pipe(fontFilter.restore())

    // IMAGES
    .pipe(imageFilter)
    .pipe(flatten())
    .pipe(gulp.dest(config.dest + '/images'))
    .pipe(imageFilter.restore());

});