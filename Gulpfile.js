var gulp       = require('gulp'),
    browserify = require('gulp-browserify');

gulp.task('scripts', function () {

    gulp.src(['app/main.jsx'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);
