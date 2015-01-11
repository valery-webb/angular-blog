var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    path = require('path');
    watchLess = require('gulp-watch-less');


gulp.task('scripts1', function () {
  gulp.src([
    'ui/src/js/app/app.js',
    'ui/src/js/app/**/**/_module.js',
    'ui/src/js/app/**/**/!(_module)*.js'
    ])
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
})

gulp.task('watch', function() {
   gulp.watch('ui/src/js/app/**/**/*.js', ['scripts1'])
   gulp.watch('ui/src/less/**/*.less', ['less'])
});

gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8181
    });
});

gulp.task('less', function () {
    gulp.src('ui/src/less/*.less')
    .pipe(less({
        paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

gulp.task('default', ['connect','watch', 'scripts1', 'less']);




