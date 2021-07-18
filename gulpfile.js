const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');

function style() {
  return gulp.src(['./**/*.scss', '!node_modules/**'])
    .pipe(sass())
    .pipe(gulp.dest('./styles'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(['./**/*.scss', '!node_modules/**'], style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('/scripts/**/*.js').on('change', browserSync.reload)
}
exports.style = style;
exports.watch = watch;
