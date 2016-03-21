import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import browserSync from 'browser-sync';
import PATH from './path';

gulp.task('img', () => {
  return gulp.src(PATH.IMG)
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [
      {removeViewBox: false},
      {cleanupIDs: false}
    ],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(PATH.TEMP_IMG))
  .pipe(browserSync.stream());
});
