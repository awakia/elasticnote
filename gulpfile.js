require('dotenv').load();

var gulp = require("gulp");
var config = require("config");

var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

var sass = require("gulp-sass");

gulp.task("scss", function() {
  gulp.src("./scss/**/*scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});

function bundle(name, watch = false) {
  var bundler = browserify(config.browserify.entry);

  function rebundle() {
    bundler.bundle()
      // .on("error", $.util.log)
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("./javascript"));
  }

  if watch {
    bundler = watchify(bundler).on("update", rebundle);
  }
  rebundle();
}

gulp.task("build", bundle.bind(null, name));
gulp.task("watch", bundle.bind(null, name, watch = true));
