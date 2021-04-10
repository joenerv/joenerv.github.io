module.exports = function () {
    $.gulp.task('sass',function () {
        return $.gulp.src('app/sass/*.sass')
            .pipe($.gp.sass())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.autoprefixer({
                browserlist: ['last 5 versions']
            }))
            .on("error", $.gp.notify.onError({
                title: "Stile"
              }))
            // .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('dist/css/'))
            .pipe($.bs.reload({
                stream:true
            }));
    
    });
    
}; 