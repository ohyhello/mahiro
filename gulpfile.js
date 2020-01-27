var gulp = require('gulp');
//Plugins模块获取
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

//压缩css
gulp.task('minify-css', function () {
return gulp.src('./src/css/*.css')
.pipe(rename({suffix: '.min'}))
.pipe(minifycss())
.pipe(gulp.dest('./dist/css'));
});

//压缩js 不压缩min.js
gulp.task('minify-js', function () {
return gulp.src(['./src/js/*.js', '!./src/js/*.min.js'])
.pipe(rename({suffix: '.min'}))
.pipe(uglify())
.pipe(gulp.dest('./dist/js'));
});

//4.0以前的写法 
//gulp.task('default', [
  //  'minify-html', 'minify-css', 'minify-js'
//]);
//4.0以后的写法
// 执行 gulp 命令时执行的任务
gulp.task('default', gulp.parallel('minify-css', 'minify-js', function() {
  // Do something after a, b, and c are finished.
}));
 
