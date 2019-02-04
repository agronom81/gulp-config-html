'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sassGlob = require('gulp-sass-glob'); //glob imports folders: @import 'consts/**/*.scss';
const sourcemaps = require('gulp-sourcemaps'); // sourcemaps for css and js
const autoprefixer = require('gulp-autoprefixer'); //autoprefixer
const csso = require('gulp-csso'); // minification css
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync');
const rename = require("gulp-rename");
const path = require('./path');

gulp.task('sass', function () {
    return gulp.src(path.sass.entry)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: [
                '>1%',
                'last 3 version',
                'ie 9',
                'Opera 12'
            ],
            cascade: true
        }))
        .pipe(gcmq())
        // .pipe(gulp.dest(path.sass.dist))
        // .pipe(rename('style.min.css'))
        // .pipe(csso({
        //   restructure: false,   // don't change CSS structure, i.e. don't merge declarations, rulesets etc
        //   debug: true
        // }))
        .pipe(gulp.dest(path.sass.dist))
        .pipe(browserSync.stream())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(path.sass.dist));
});

gulp.task('sass-lint', function () {
  return gulp.src(path.sass.src)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('css-move', function() {
  gulp.src([''])
  .pipe(gulp.dest(path.sass.dist));
});
