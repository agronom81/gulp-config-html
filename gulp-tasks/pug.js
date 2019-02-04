'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const htmlmin = require('gulp-htmlmin');
const path = require('./path');

gulp.task('pug', function () {
    return gulp.src(path.pug.src)
        .pipe(pug({
            pretty: '    '
        }))
        .on('error', notify.onError(function(error){
            return {
                title: 'Pug',
                message: error.message
            }
        }))
        .pipe(htmlmin({
            collapseBooleanAttributes: true,
            conservativeCollapse: true,
            removeCommentsFromCDATA: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true
        }))
        .pipe(gulp.dest(path.pug.dist));        
});
