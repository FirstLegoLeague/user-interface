/*******************************
          Build Task
*******************************/

var
  gulp         = require('gulp'),

  // gulp dependencies
  chmod        = require('gulp-chmod'),
  gulpif       = require('gulp-if'),

  // config
  config       = require('../config/user'),
  tasks        = require('../config/tasks'),

  // shorthand
  globs        = config.globs,
  assets       = config.paths.assets,
  output       = config.paths.output,
  source       = config.paths.source,

  log          = tasks.log
;

module.exports = function(callback) {

  console.info('Building assets');

  // copy themes assets
  const subTasks = []

  if (source.themes && output.themes) {
    subTasks.push(gulp.src(source.themes + '/**/assets/**/*.*')
      .pipe(gulpif(config.hasPermission, chmod(config.permission)))
      .pipe(gulp.dest(output.themes)))
  }

  if (source.site && output.site) {
    subTasks.push(gulp.src(source.site + '/**/assets/**/*.*')
      .pipe(gulpif(config.hasPermission, chmod(config.permission)))
      .pipe(gulp.dest(output.site)))
  }

  return Promise.all(subTasks)
};