const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const autoprefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const runSequence = require('run-sequence');
const imagemin = require('gulp-imagemin');
const sourcemaps =  require('gulp-sourcemaps');

const config = require('./gulp/config');
const webpackConfig = require('./webpack.config');

//build fonts
gulp.task('fonts', () => gulp.src(config.paths.entry.fonts).pipe(gulp.dest(config.paths.output.fonts)));

//build styles
gulp.task('sass', () => {
    runSequence('sass:clean', 'sass:build');
});

gulp.task('sass:build', () => gulp.src(config.paths.entry.styles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream()));

gulp.task('sass:clean', () => gulp.src(config.paths.output.styles).pipe(clean({force: true})));

//build scripts
gulp.task('scripts', () => {
    runSequence('scripts:clean', 'scripts:build');
});

gulp.task('scripts:build', () => gulp.src(config.paths.entry.scripts)
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('build/scripts'))
    .pipe(browserSync.stream()));

gulp.task('scripts:clean', () => gulp.src(config.paths.output.scripts).pipe(clean({force: true})));

//build html
gulp.task('html', () => {
    runSequence('html:clean', 'html:build');
});

gulp.task('html:build', () => gulp.src(config.paths.entry.pages)
    .pipe(fileinclude('@@'))
    .pipe(gulp.dest(config.paths.build))
    .pipe(browserSync.stream()));

gulp.task('html:clean', () => gulp.src(config.paths.output.pages).pipe(clean({force: true})));

gulp.task('images', () => gulp.src(config.paths.entry.images)
    .pipe(imagemin())
    .pipe(gulp.dest(config.paths.output.images)));

//build clean
gulp.task('clean:all', () => gulp.src('build').pipe(clean({force: true})));

//watch all
gulp.task('watch:all', () => {
    gulp.watch(config.paths.watch.styles, ['sass']);
    gulp.watch(config.paths.watch.scripts, ['scripts']);
    gulp.watch(config.paths.watch.pages, ['html']);
});

//server start
gulp.task('server', ['watch:all'], () => {
    browserSync.init(config.server);
});

gulp.task('default', (callback) => {
    runSequence('clean:all', 'fonts', 'images', 'sass:build', 'scripts:build', 'html:build', 'server', callback);
});
