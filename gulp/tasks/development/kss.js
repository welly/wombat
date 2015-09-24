var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('kss', shell.task(['kss-node --template src/_styleguide/template --config kss-config.json']
));