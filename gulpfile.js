const gulp = require("gulp");
const plumber = require("gulp-plumber");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const del = require("del");

// Styles

const styles = () => {
  return gulp
    .src("docs/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

//images

const images = () => {
  return gulp
    .src("source/img/**/*.{jpg,png,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.svgo(),
      ])
    );
};

exports.images = images;

//copy

const copy = () => {
  return gulp
    .src(
      [
        "docs/img/**",
        "docs/bundle.js",
        "docs/js/**",
        "docs/*.html",
      ],
      {
        base: "docs",
      }
    )
    .pipe(gulp.dest("build"));
};

exports.copy = copy;

//clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

//build

const build = gulp.series(clean, copy, styles);
exports.build = build;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// HTML

const html = () => {
  return gulp
  .src("docs/*.html")
  .pipe(gulp.dest("build/"));
};
exports.html = html;

// refresh

const refresh = (done) => {
  sync.reload();
  done();
};
exports.refresh = refresh;

// Watcher

const watcher = () => {
  gulp.watch("docs/less/**/*.less", gulp.series(styles));
  gulp.watch("docs/*.html", gulp.series(html, refresh));
  gulp.watch("docs/img/**/*.{jpg,png}", gulp.series(clean, copy, refresh));
};

exports.default = gulp.series(build, server, watcher);
