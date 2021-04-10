module.exports = function () {
    $.gulp.task('watch',function () {
        $.gulp.watch(['app/pug/*.pug', 'app/pug/tamplate/*.pug', 'app/pug/tamplate/pages/*.pug'], $.gulp.series('pug'));
        $.gulp.watch(['app/sass/*.sass', 'app/sass/components/*.sass'], $.gulp.series('sass'));
    });
    
}; 