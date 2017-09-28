var gulp=require('gulp');
var browserify=require('browserify');
var babelify=require('babelify');
var source=require('vinyl-source-stream');


gulp.task('default',function(){
    return browserify('./source/app.jsx')  //把JSX语言转化为JS语言
        .transform(babelify,{presets:["es2015", "react"]})        //高版本转化为低版本
        .bundle()
        .pipe(source('reactobj.js'))
        .pipe(gulp.dest('./public'));//通过管道输出到public下的reactobj.js'
});




