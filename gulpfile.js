const gulp = require("gulp");
const sass = require("gulp-ruby-sass");

gulp.task('sass', () =>
    sass('app/src/scss/**/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('app/css'))
);