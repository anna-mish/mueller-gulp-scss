module.exports = {
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade: true,
        grid: true
    },
    server: {
        server: "./build",
        tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: "browserSync Log: ",
        routes: {
            "/build": "/"
        }
    },
    paths: {
        entry: {
            styles: ['app/styles/*.scss'],
            scripts: ['app/scripts/*', 'app/scripts/**/*', 'app/scripts/**/**/*'],
            pages: ['app/pages/*.html'],
            images: ['app/images/*'],
            fonts: ['app/styles/fonts/*{ttf,woff,woff2,svg,eot}']
        },
        output: {
            styles: ['build/css'],
            scripts: ['build/scripts'],
            pages: ['build/*.html'],
            images: 'build/images',
            fonts: 'build/fonts'
        },
        watch: {
            styles: ['app/styles/*', 'app/styles/**/*', 'app/styles/**/**/*'],
            scripts: ['app/scripts/*', 'app/scripts/**/*', 'app/scripts/**/**/*'],
            pages: ['app/pages/*.html', 'app/pages/**/*.html', 'app/pages/**/**/*.html']
        },
        build: 'build'
    }
};
