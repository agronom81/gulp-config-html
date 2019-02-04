'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // image minification
const jpegtran = require('imagemin-jpegtran');
const optipng = require('imagemin-optipng');
const path = require('./path');

gulp.task('imagemin', function() {
    gulp.src(path.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest(path.images.dist))
});

gulp.task('favicon-move', function () {
  gulp.src(path.images.favicon_src)
  .pipe(gulp.dest(path.images.favicon_dist));
});