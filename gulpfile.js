var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cmq = require('gulp-combine-mq');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
    return gulp.src('./_site/css/app.css')
        .pipe(sourcemaps.init())
        .pipe(cmq())
        .pipe(minifyCss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
    return gulp.src('./_site/js/app.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
    gulp.watch('./_site/css/app.css', ['css']);
    gulp.watch('./_site/js/app.js', ['js']);
});

gulp.task('build', ['css', 'js']);

gulp.task('default', ['build', 'watch']);