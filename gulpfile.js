/** 
 * Created by haxzie on 22/02/2018- 11:06PM
*/

var gulp = require('gulp');
var clean_css = require('gulp-clean-css');
var compass = require('gulp-compass');

// task to minify and clean the css files
gulp.task('clean', function() {
    console.log('Clean-CSS','cleaning css...');
    return gulp.src('public/stylesheets/styles.css')
            .pipe(clean_css({compatibility: 'ie8'}))
            .pipe(gulp.dest('public/stylesheets').on('error', console.log));
});

// task to compile the sass files to css
gulp.task('compass', function() {
    console.log('compass','preprocessing sass...');
    gulp.src('./public/sass/styles.scss')
      .pipe(compass({
        config_file: './config.rb',
        css: 'public/stylesheets',
        sass: 'public/sass'
      }))
      .pipe(gulp.dest('./public/stylesheets'));
});

//auto generate service worker
gulp.task('generate-sw', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var publicDir = './public';
  var caching_files = ['./public/stylesheets/*.css','./public/images/*.{jpg,png,ico,svg}','./public/images/**/*.{jpg,png,ico,svg}','./public/javascripts/bin/{materialize.min.js,lazyload.min.js}','./public/fonts/{lato,nunito}/*.{woff,woff2,css}','./public/manifest.json'];
  swPrecache.write(path.join(publicDir, 'sw.js'), {
    staticFileGlobs: caching_files,
    stripPrefix: publicDir
  }, callback);
});

// the default task to rum both sass preprocessing and clean-css
gulp.task('default', ['compass', 'clean']);

// Let gulp to watch any changes made to scss files
gulp.watch('./public/sass/**/*.scss',['default']);