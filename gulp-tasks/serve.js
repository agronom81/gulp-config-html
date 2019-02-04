'use strict';

const gulp = require('gulp');
var browserSync = require('browser-sync');

const path = require('./path');

gulp.task('serve', function () {
    browserSync.init({
       open: false,
       server : path.serve.dist
   });
   browserSync.watch(path.serve.disthtml, browserSync.reload);
   browserSync.watch(path.serve.distjs, browserSync.reload);
   browserSync.watch(path.serve.distimg, browserSync.reload);
});