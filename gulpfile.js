var gulp = require("gulp");

var sass = require("gulp-sass");

gulp.task("scss", function() {
    gulp.src("./scss/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});
