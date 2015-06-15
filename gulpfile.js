var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyjs'),
    minifyCss = require('gulp-minify-css');

// define the default task and add the watch task to it
gulp.task('default', function() {
  gulp.watch('client/scss/*.scss', ['sass']);
  gulp.watch('client/dist/css/*.css', ['minify-css']);
  gulp.watch('client/js/*.js', ['uglify']);
});

gulp.task('jshint', function() {
  return gulp.src('client/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
gulp.task('sass', function() {
  return gulp.src('client/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('client/dist/css'))
});
gulp.task('uglify', function() {
  return gulp.src('client/js/*.js')
    .pipe(uglify('main.min.js'))
    .pipe(gulp.dest('client/dist/js'))
});
gulp.task('minify-css', function() {
  return gulp.src('client/dist/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('client/dist/css'));
});

// gulp.task('watch', function() {
//   gulp.watch('client/js/*.js', ['jshint']);
//   gulp.watch('client/scss/*.scss', ['sass']);
//   gulp.watch('client/dist/css/*.css', ['minify-css']);
//   gulp.watch('client/js/*.js', ['uglify']);
// });

//dodanie img optimizera