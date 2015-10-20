'use strict';

var gulp = require('gulp'),
    favicons = require('favicons');


var icons = (function() {
    return {
        compile: function(config) {
            return favicons({
                files: {
                    src: 'assets/' + config.src + 'favicon.src.png',
                    dest: 'assets/' + config.dest,
                    html: config.html,
                    iconsPath: 'assets/' + config.path,
                },
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: true,
                    favicons: true,
                    firefox: true,
                    opengraph: true,
                    windows: true,
                    yandex: true
                },
                  settings: {
                      background: config.background,
                      logging: true
                  },
                favicon_generation: null,
            });

            return this;
        }
    };
}());

gulp.task('icons', function() {
    return icons
        .compile({
            // Favicon .png source file
            src: 'images/favicons/',
            // Destination of generated favicons
            dest: 'images/favicons/',
            // Html source to write favicon <link>'s
            html: 'index.html',
            // Favicon <link src="..."> paths
            path: 'images/favicons/',
            // Background for generated tiles for monchrome images ie. Windows tiles
            background: 'transparent'
        });

});

gulp.task('watch', function() {
    gulp.watch(['**/**/**/favicon.src.png'], ['icons']);
});

gulp.task('default', ['icons', 'watch']);
