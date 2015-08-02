require('dotenv').load();

var gulp = require("gulp");

var $ = require("gulp-load-plugins")();
var config = require("config");

var browserSync = require("browser-sync");
var reload = browserSync.reload;
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
      .pipe(gulp.dest(config.browserify.dest))
      .pipe(reload({stream: true, once: true}));
  }

  if (watch) {
    bundler = watchify(bundler).on("update", rebundle);
  }
  rebundle();
}

gulp.task("build", bundle.bind(null));
gulp.task("watchify", bundle.bind(null, true));

gulp.task("serve", ["watchify"], function() {
  browserSync({
    server: {
      baseDir: ['public']
    }
  })
  gulp.watch(config.style.src, ["style", reload]);
  gulp.watch(config.template.src, ["template", reload]);
})

gulp.task("default", ["serve"]);
