var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    config 		= require('../config.js'),
    browserSync = require('browser-sync');

gulp.task('default', function () {
    
    browserSync({
        proxy: config.vhost
    });

    //-- Live reload CSS / SASS
    gulp.watch( config.styles.sass, ['sass']);

    //-- Live Reload JS Libs & App
    gulp.watch( config.scripts.app, ['js_app']);

    //-- Live reload HTML
    gulp.watch( config.pages.src ).on('change', browserSync.reload);


});