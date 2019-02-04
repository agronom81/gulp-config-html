'use strict';

//modules
const gulp = require('gulp');
const path = require('./gulp-tasks/path');


require('require-dir')('./gulp-tasks');

//watch
gulp.task('watch', function () {
    gulp.watch(path.sprite.src, ['sprite']);
    gulp.watch(path.images.src, ['imagemin']);
    gulp.watch(path.pug.srcwatch, ['pug']);
    gulp.watch(path.sass.src, ['sass', 'sass-lint', 'css-move']);
    gulp.watch(path.js.src, ['js', 'js-move']);
    gulp.watch(path.font.src, ['fonts-move']);
    gulp.watch(path.images.favicon_src, ['favicon-move']);
});

//default
gulp.task('default', ['sprite', 'imagemin', 'favicon-move', 'pug', 'sass', 'sass-lint', 'css-move', 'js', 'js-move', 'fonts-move', 'watch', 'serve']);
// gulp.task('default', ['clean', 'sprite', 'imagemin', 'pug', 'sass', 'watch', 'serve']);


