import gulp from 'gulp';
import ejs from 'gulp-ejs';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import fs from 'fs';
import PATHS from './path';

gulp.task('ejs', () => {
  gulp.src([PATHS.EJS, PATHS.EJS_REMOVE])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(ejs({ext: '.html'}))
  .pipe(gulp.dest(PATHS.TEMP_EJS))
  .pipe(browserSync.stream());
});
