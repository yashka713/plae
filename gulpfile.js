/**
 * Created by Ярик on 09.05.2016.
 */
var gulp = require('gulp');
var rename = require("gulp-rename");
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('change', function () {

    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));

    gulp.src('src/js/*.js')
        .pipe(gulp.dest('build/js/'));

    gulp.src('src/lib/*.*')
        .pipe(gulp.dest('build/lib/'));

    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts/'));

    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 1%', 'IE 7'],
            cascade: false
        }))
        .pipe(concatCss("production.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css/'));

});

// Действия по умолчанию
gulp.task('default', function () {
    gulp.run('change');
});
