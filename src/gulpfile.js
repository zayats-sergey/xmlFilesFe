const gulp = require("gulp");
const webp = require("gulp-webp");

gulp.task("webp", function() {
  return gulp.src("src/img/**/*.{jpg,jpeg,png,svg}")
    .pipe(webp())
    .pipe(gulp.dest("dist/img"));
});


