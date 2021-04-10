module.exports = function () {
    $.gulp.task('pug',function () {
        return $.gulp.src('app/pug/*.pug')
            .pipe($.gp.pug({
                pretty:true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end',$.bs.reload);
    });
    
}; 