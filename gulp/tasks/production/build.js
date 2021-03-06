var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete',
  [
    'sass',
    'images',
    'copy:fonts'
  ],
  [
    'optimize:css',
    'optimize:js',
    'optimize:images',
    'copy:fonts:production'
  ],
  [
    'webp',
  ],
  callback);
});
