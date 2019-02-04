'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

const path = require('./path');

gulp.task('compress', function (cb) {
    pump([
            gulp.src(path.js.minsrc),
            uglify(),
            gulp.dest(path.js.mindist)
        ],
        cb
    );
});