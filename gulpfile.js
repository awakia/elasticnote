require('dotenv').load();

var gulp = require("gulp");
var config = require("config");

var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

var sass = require("gulp-sass");

gulp.task("style", function() {
  gulp.src(config.style.src)
    .pipe(sass())
    .pipe(gulp.dest(config.style.dest));
});

function bundle(watch) {
  var bundler = browserify(config.browserify.entry);

  function rebundle() {
    bundler.bundle()
      // .on("error", $.util.log)
      .pipe(source(config.browserify.output))
      .pipe(gulp.dest(config.browserify.dest));
  }

  if (watch) {
    bundler = watchify(bundler).on("update", rebundle);
  }
  rebundle();
}

gulp.task("build", bundle.bind(null));
gulp.task("watch", bundle.bind(null, true));
