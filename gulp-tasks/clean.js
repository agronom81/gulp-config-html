'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');

const path = require('./path');

gulp.task('clean', function () {
  return gulp.src([path.clean.dist], {read: false})
  .pipe(clean());
});