require('dotenv').load();

var gulp = require("gulp");

var $ = require("gulp-load-plugins")();
var config = require("config");

var browserSync = require("browser-sync");
var reload = browserSync.reload;
var browserify = require("browserify");
var babelify = require("babelify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");

gulp.task("style", function() {
  gulp.src(config.style.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .on("error", $.util.log)
    .pipe($.size({title: "app.css"}))
    .pipe($.autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.style.dest));
});

gulp.task("html", function() {
  gulp.src(config.html.src)
    .pipe($.size({title: "*.html"}))
    .pipe($.jade())
    .on("error", $.util.log)
    .pipe(gulp.dest(config.html.dest))
})

function bundle(watch) {
  var bundler = browserify(config.browserify.entry);

  function rebundle() {
    bundler
      .transform(babelify)
      .bundle()
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

gulp.task("serve", ["style", "html", "watchify"], function() {
  browserSync({
    server: {
      baseDir: ['public']
    }
  })
  gulp.watch(config.style.src, ["style", reload]);
  gulp.watch(config.html.src, ["html", reload]);
})

gulp.task("default", ["serve"]);
