'use strict';

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith'); // create sprites
var path = require('./path');

gulp.task('sprite', function () {
    var spriteData = gulp.src(
        path.sprite.src
    ).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        cssFormat : 'css',
        imgPath : path.sprite.imgLocation,
        padding: 50
    }));

    spriteData.img.pipe(gulp.dest(path.sprite.distImg));
    spriteData.css.pipe(gulp.dest(path.sprite.distFile));
});