var gulp       = require('gulp');
var livereload = require('gulp-livereload');

var config = {
    css: './public/css/**/*.css',
    html: './public/**/*.html'
};

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(config.css).on('change',function(file){
      livereload.changed(file);
    });
    gulp.watch(config.html).on('change',function(file){
      livereload.changed(file);
    });
});

gulp.task('default', ['watch']);
