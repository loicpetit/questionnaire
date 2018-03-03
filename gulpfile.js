var gulp = require('gulp');
var gulpts = require('gulp-typescript');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('default', ['build']);

gulp.task('build', function(done){
    runSequence('build:clean', ['build:typescript', 'build:html'], done)
});

gulp.task('build:typescript', function () {
    var tsconfig = gulpts.createProject('tsconfig.json');
    return tsconfig.src().pipe(tsconfig()).js.pipe(gulp.dest("target"));
});

gulp.task('build:html', function(){
    return gulp.src('src/**/*.html').pipe(gulp.dest('target'))
});

gulp.task('build:clean', function(){
    return del('target')
});