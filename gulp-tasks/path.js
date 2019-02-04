'use strict';

//paths
var SRC_DIR = 'src/';
var DIST_DIR = 'dist/';

var path = {
    sass : {
        entry : SRC_DIR + 'sass/style.scss',
        src : SRC_DIR + 'sass/**/*.scss',
        dist : DIST_DIR + 'assets/css'
    },

    font : {
      src : SRC_DIR + 'fonts/**/*.*',
      dist : DIST_DIR + 'assets/fonts'
    },

    sprite : {
        src : SRC_DIR + 'img/icons/*.png',
        distImg : DIST_DIR + 'assets/img',
        imgLocation : '../img/sprite.png',
        distFile : SRC_DIR + 'sass/sprite'
    },

    js : {
        src : SRC_DIR + 'js/**/*.js',
        files : SRC_DIR + 'js-files/**/*.js',
        dist : DIST_DIR + 'assets/js',
        mindist : DIST_DIR + 'assets/js/min',
        minsrc : DIST_DIR + 'assets/js/main.min.js'
    },

    images : {
        src : SRC_DIR + 'img/images/**/*',
        dist : DIST_DIR + 'assets/img',
        favicon_src : SRC_DIR + 'img/favicon/**/*',
        favicon_dist : DIST_DIR
    },

    pug : {
        src : SRC_DIR + 'template/*.pug',
        srcwatch: SRC_DIR + 'template/**/*.pug',
        dist : DIST_DIR
    },

    clean : {
        dist : DIST_DIR
    },

    serve : {
        dist : DIST_DIR,
        disthtml : DIST_DIR + '**/*.html',
        distjs : DIST_DIR + 'assets/js/**/*.js',
        distimg : DIST_DIR + 'assets/img/**/*.*',
    }
};

module.exports = path;