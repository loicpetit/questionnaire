const gulp = require('gulp');
const cache = require('gulp-cached');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require("gulp-tslint");
const typescript = require('gulp-typescript');
const del = require('del');
const runSequence = require('run-sequence');

const tsProject = typescript.createProject('tsconfig.json');

gulp.task('clean', function () {
    return del('target')
});

gulp.task('build', function (done) {
    runSequence('build:clean', ['build:typescript', 'build:html', 'build:lib'], done)
});

gulp.task('build:typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(cache('typescript'))
        .pipe(tslint())
        .pipe(tslint.report({
            emitError: false
        }))
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src' }))
        .pipe(gulp.dest("target"));
});

gulp.task('build:html', function () {
    return gulp.src('src/**/*.html')
        .pipe(cache('html'))
        .pipe(gulp.dest('target'));
});

gulp.task('build:lib', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]).pipe(gulp.dest('target/window/lib'));
});

gulp.task('build:clean', function () {
    return del('target')
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['src/**/*.ts', 'src/**/*.html'], ['build:typescript', 'build:html']);
});
