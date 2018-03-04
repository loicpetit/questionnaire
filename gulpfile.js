const gulp = require('gulp');
const tslint = require("gulp-tslint");
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('clean', function () {
    return del('target')
});

gulp.task('build', function (done) {
    runSequence('build:clean', ['build:typescript', 'build:html'], done)
});

gulp.task('build:typescript', function () {
    var project = typescript.createProject('src/tsconfig.json');
    return project.src()
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(project()).js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../../src' }))
        .pipe(gulp.dest("target/src"));
});

gulp.task('build:html', function () {
    return gulp.src('src/**/*.html').pipe(gulp.dest('target/src'))
});

gulp.task('build:clean', function () {
    return del('target/src')
});

gulp.task('buildtest', function (done) {
    runSequence('buildtest:clean', ['buildtest:typescript'], done);
});

gulp.task('buildtest:clean', function () {
    return del('target/test')
});

gulp.task('buildtest:typescript', function () {
    var project = typescript.createProject('test/tsconfig.json');
    return gulp.src('test/**/*.ts', { base: 'test' })
        .pipe(sourcemaps.init())
        .pipe(project()).js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../../test' }))
        .pipe(gulp.dest('target/test'))
});