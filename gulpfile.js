var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./src/sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./src/sass/*.scss', ['sass'])
});
