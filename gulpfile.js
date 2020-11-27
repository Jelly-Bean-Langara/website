const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function defaultTask(done) {
  done();
}

gulp.task('static', () => gulp.src('tmp/*')
  .pipe(imagemin())
  .pipe(gulp.dest('src/assets/static')));

gulp.task('default', gulp.series('static'), defaultTask);
