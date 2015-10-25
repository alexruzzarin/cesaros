/**
 * Created by alexruzzarin on 10/24/15.
 */
import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import david from 'gulp-david';
import eslint from 'gulp-eslint';
import htmlmin from 'gulp-htmlmin';
import onlyif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import yargs from 'yargs';
import browserSync from 'browser-sync';

const source = {
    package: './package.json',
    base: './src',
    js: ['src/scripts/**/*.js'],
    html: ['src/*.html'],
    styles: ['src/styles/*.scss'],
    images: ['src/images/**/*.*'],
};

const production = yargs.argv.production;

gulp.task('pre', () => {
    return gulp.src(source.package)
        .pipe(david())
        .pipe(david.reporter);
});

gulp.task('js', () => {
    return gulp.src(source.js, {base: source.base})
        .pipe(eslint())
        .pipe(onlyif(!production, sourcemaps.init()))
        .pipe(babel())
        .pipe(onlyif(production, uglify()))
        .pipe(onlyif(!production, sourcemaps.write()))
        .pipe(gulp.dest("dist"))
        .pipe(onlyif(!production, browserSync.reload({stream: true})));
});

gulp.task('html', () => {
    return gulp.src(source.html, {base: source.base})
        .pipe(onlyif(!production, htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest('dist'))
        .pipe(onlyif(!production, browserSync.reload({stream: true})));
});

gulp.task('vendor-css', () => {
    return gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(rename('_normalize.scss'))
        .pipe(gulp.dest('./temp'));
});

gulp.task('css', ['vendor-css'], () => {
    return gulp.src(source.styles, {base: source.base})
        .pipe(onlyif(!production, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(onlyif(!production, sourcemaps.write()))
        .pipe(gulp.dest('dist'))
        .pipe(onlyif(!production, browserSync.stream()));
});

gulp.task('images', () => {
    const options = {
        progressive: true,
        interlaced: true,
    };
    return gulp.src(source.images, {base: source.base})
        .pipe(onlyif(!production, imagemin(options)))
        .pipe(gulp.dest('dist'))
        .pipe(onlyif(!production, browserSync.reload({stream: true})));
});

gulp.task('watch', ['default'], ()=> {
    browserSync.init({
        server: './dist',
    });

    gulp.watch(source.js, ['js']);
    gulp.watch(source.html, ['html']);
    gulp.watch(source.css, ['css']);
    gulp.watch(source.images, ['images']);
});

gulp.task('default', ['pre', 'html', 'js', 'css', 'images']);