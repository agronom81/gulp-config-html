'use strict';

const gulp = require('gulp');
const path = require('./path');

gulp.task('fonts-move', function() {
  gulp.src(path.font.src)
  .pipe(gulp.dest(path.font.dist));
});