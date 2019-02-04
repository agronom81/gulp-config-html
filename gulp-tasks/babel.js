'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel'); //babel
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const minify = require('gulp-minify');

const path = require('./path');

let plumberErrorHandler = {errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>',
    }),
};

gulp.task('js', function() {
    gulp.src(path.js.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
          "presets": ["@babel/preset-env"]
        }))
        .pipe(plumber(plumberErrorHandler))
        .pipe(concat('main.js'))
        .pipe(minify({
          ext:{
            src:'.js',
            min:'.min.js'
          },
          ignoreFiles: ['-min.js']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.js.dist));
});

gulp.task('js-move', function() {
  gulp.src([path.js.files, ''])
  .pipe(gulp.dest(path.js.dist));
});
