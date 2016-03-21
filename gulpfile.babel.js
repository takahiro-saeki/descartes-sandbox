import gulp from 'gulp';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import PATH from './gulp/path';
requireDir('./gulp');

gulp.task('default', () => {
    browserSync.init({ server: { baseDir: "./template" }});
    gulp.watch(PATH.EJS_FULL, ['ejs']);
    gulp.watch(PATH.JS_FULL, ['js']);
    gulp.watch(PATH.IMG, ['imgMin']);
    gulp.watch(PATH.IMG, ['style']);
});
