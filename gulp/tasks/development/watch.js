var gulp = require('gulp');
var config = require('../../config').watch;

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.css, ['css']);
  gulp.watch(config.images, ['images']);
  // gulp.watch(config.svg, ['copy:fonts']);
});
