const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Задача для CSS
exports.minifyCSS = async () => {
    return gulp.src('app/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public'));
};

// Задача для JS
exports.minifyJS = async () => {
    return gulp.src('app/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public'));
};
