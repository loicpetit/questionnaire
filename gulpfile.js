const gulp = require('gulp');
const tslint = require("gulp-tslint");
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('default', ['build']);

gulp.task('build', function(done){
    runSequence('build:clean', ['build:typescript', 'build:html'], done)
});

gulp.task('build:typescript', function () {
    var project = typescript.createProject('tsconfig.json');
    return project.src()
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(project()).js
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../src'}))
        .pipe(gulp.dest("target"));
});

gulp.task('build:html', function(){
    return gulp.src('src/**/*.html').pipe(gulp.dest('target'))
});

gulp.task('build:clean', function(){
    return del('target')
});