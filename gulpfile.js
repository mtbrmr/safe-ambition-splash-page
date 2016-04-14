var gulp    = require('gulp');
var sass    = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');
var pug     = require('gulp-pug');

gulp.task('default', function(){
  console.log('running');
});

gulp.task('pug', function build() {
  return gulp.src('*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('_site'));
});

gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix(['last 2 versions']))
    .pipe(gulp.dest('./_site'));
});

gulp.task('watch', function() {
  gulp.watch('*.pug', ['pug']);
  gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['pug', 'sass', 'watch']);
