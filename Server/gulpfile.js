/**
 * Created by isak16 on 2017-03-20.
 */
var gulp = require('gulp');
var gls = require('gulp-live-server');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var server = gls.static('../dist', 8888);
server.start();

gulp.task('serve', function() {
    gulp.watch(['../dist/**/*.css', '../dist/**/*.html', '../dist/**/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });

});

gulp.task('sass', function () {
    return gulp.src('../dist/assets/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('../dist/assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('../dist/assets/scss/*.scss', ['sass']);
});


// start our server and listen for changes
gulp.task('server', function() {
    // configure nodemon
    nodemon({
       script: './index.js',
        watch: ["**/*"],
        ext: 'js'
   }).on('restart', function () {
        console.log("Node restarted");
    });


});

gulp.task('default',  ['serve', 'sass', 'watch', 'server']);