require('dotenv').load();

var gulp = require("gulp");

var $ = require("gulp-load-plugins")();
var config = require("config");

var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

gulp.task("style", function() {
  gulp.src(config.style.src)
    .pipe($.sass())
    .pipe($.size({title: "app.css"}))
    .pipe(gulp.dest(config.style.dest));
});

gulp.task("template", function() {
  gulp.src(config.template.src)
    .pipe($.size({title: "template/*.html"}))
    .pipe(gulp.dest(config.template.dest))
})

function bundle(watch) {
  var bundler = browserify(config.browserify.entry);

  function rebundle() {
    bundler.bundle()
      .on("error", $.util.log)
      .pipe(source(config.browserify.output.filename))
      .pipe($.streamify($.size({title: config.browserify.output.filename})))
      .pipe(gulp.dest(config.browserify.dest));
  }

  if (watch) {
    bundler = watchify(bundler).on("update", rebundle);
  }
  rebundle();
}

gulp.task("build", bundle.bind(null));
gulp.task("watchify", bundle.bind(null, true));
gulp.task("watch", ["watchify"] ,function() {
  gulp.watch(config.style.src, ["style"])
  gulp.watch(config.template.src, ["template"])
});

gulp.task("default", ["watch"]);
