var gulp            = require('gulp'),
    config          = require('../config.js'),
    plumber         = require('gulp-plumber'),
    changed         = require('gulp-changed'),
    concat          = require('gulp-concat'),
    browserSync     = require('browser-sync');


gulp.task('js_app', function () {
    return gulp.src(config.scripts.app)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(changed(config.scripts.dist))
        .pipe(concat("app.js"))
        .pipe(gulp.dest(config.scripts.dist))
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(browserSync.reload({stream:true}))
});
