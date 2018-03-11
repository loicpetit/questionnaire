const gulp = require('gulp');
const tslint = require("gulp-tslint");
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const del = require('del');

const tsProject = typescript.createProject('tsconfig.json');

gulp.task('clean', function () {
    return del('target')
});

gulp.task('build', function (done) {
    runSequence('build:clean', ['build:typescript', 'build:html', 'build:lib'], done)
});

gulp.task('build:typescript', function () {
    return gulp.src('src/**/*.ts')
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
    return gulp.src('src/**/*.html').pipe(gulp.dest('target'))
});

gulp.task('build:lib', function(){
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(gulp.dest('target/window/lib'));
});

gulp.task('build:clean', function () {
    return del('target')
});

gulp.task('watch', ['build'], function(){
    gulp.watch('src/**/*.ts', ['build:typescript']);
});
