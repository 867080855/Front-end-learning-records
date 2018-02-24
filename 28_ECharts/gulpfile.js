var gulp = require('gulp');

// 初始路径及输出路径
var OriginCss = './src/styles/css/**/*.css';
var OriginSass = './src/styles/scss/**/*.scss';
var OriginJs = './src/scripts/**/*.js';

var DestJs = './dist/scripts/';
var DestMinJs = './dist/scripts/';
var DestAllJs = './dist/scripts/**/*.js'

var DestCss = './dist/styles/css/';
var DestSass = './dist/styles/sass-to-css/';
var DestAllCss = './dist/styles/**/*.css';

// 浏览器同步
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// sass
var sass = require('gulp-sass');

// 输出
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// 任务==================================================================

// js输出未压缩版本和压缩版本
gulp.task('outputJs', function(){
    return gulp.src(OriginJs)
        .pipe(gulp.dest(DestJs))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest(DestMinJs));
});
gulp.task('outputJs:watch',function(){
    gulp.watch(OriginJs, ['outputJs']);
});

// css输出
gulp.task('outputCss', function(){
    return gulp.src(OriginCss)
        .pipe(gulp.dest(DestCss));
});
gulp.task('outputCss:watch', function(){
    gulp.watch(OriginCss, ['outputCss']);
});

// sass任务
gulp.task('sass', function(){
    return gulp.src(OriginSass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DestSass));
});
gulp.task('sass:watch', function () {
    gulp.watch(OriginSass, ['sass']);
}); // sass文件改变自动触发sass任务


// server任务(自动打开服务器并动态监测)
gulp.task('serve', ['outputCss:watch', 'sass:watch', 'outputJs:watch'], function(){
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
    // 它的任务只是监测目标文件夹的文件是否变化，至于源文件的文件变化及转化问题
        // 还需要创建新的任务来监测
    gulp.watch(['./dist/*.html', DestAllCss, DestAllJs],reload);
});


// 把任务一个个串起来
gulp.task('output', ['outputCss', 'sass', 'outputJs']);
gulp.task('build', ['serve', 'output']);
gulp.task('default', ['build']);
