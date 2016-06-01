var gulp 				= require('gulp');
var gulpSequence 		= require('gulp-sequence');
var js_app  			= require('./js_app');
var js_libs  			= require('./js_libs');
var sass  				= require('./sass');

// Prod build task
gulp.task('build', gulpSequence(
    'js_libs',
    'js_app',
    'sass'
));