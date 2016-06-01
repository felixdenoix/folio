module.exports = {
    vhost: "folio.dev",
    scripts: {
        app: ['js/app/**/*.js'],
        vendors: ['js/vendors/jquery-1.12.3.min.js',
            'js/vendors/jquery.fullPage.js',
            'js/vendors/greensock-js/jquery.gsap.js',
            'js/vendors/greensock-js/TimmelineLite.js',
            'js/vendors/greensock-js/TweenLite.js',
            'js/vendors/greensock-js/**'],
        build: 'build/js/',
        dist: 'js/dist'
    },
    images: {
        src: ['assets/**', 'img/**'],
        build: ['build/assets', 'build/img']
    },
    styles: {
        sass: 'sass/**/*.scss',
        build: 'build/stylesheets',
        dist: 'stylesheets'
    },
    files: {
        src: ['fonts/**'],
        build: ['build/fonts']
    },
    pages: {
        src: ['**.html']
    }
};
