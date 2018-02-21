var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var compass = require('gulp-compass');

gulp.task('clean', function() {
    console.log('Converting sass...');
    return gulp.src('public/stylesheets/styles.css')
            .pipe(clean_css({compatibility: 'ie8'}))
            .pipe(gulp.dest('public/stylesheets').on('error', console.log));
});

gulp.task('compass', function() {
    gulp.src('./public/sass/*.scss')
      .pipe(compass({
        config_file: './config.rb',
        css: 'public/stylesheets',
        sass: 'public/sass'
      }))
      .pipe(gulp.dest('./public/stylesheets'));
});