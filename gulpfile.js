const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const gulp = require('gulp');
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const fileInclude = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");

function html() {
  return src("app/pages/*.html")
    .pipe(
      fileInclude({
        incudePaths: "app/components"
      })
    )
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function styles() {
  return (
    src([
      "app/scss/core.scss"
    ])
      .pipe(sourcemaps.init())
      .pipe(scss({ outputStyle: "expanded" }))
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 10 version"],
        })
      )
      // .pipe(concat("core.min.css"))
      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
  );
}

function scripts() {
  return src([
    "node_modules/swiper/swiper-bundle.js",
    "node_modules/wow.js/dist/wow.js",
    "app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/src/*.*")
    .pipe(newer("app/images"))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 5,
      })
    )
    .pipe(dest("app/images"));
}

function fonts() {
  return src("app/fonts/**/*.*")
    .pipe(dest("app/fonts"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["app/scss/**/*.scss"], styles)
  watch(["app/images/src"], images)
  watch(["app/js/main.js"], scripts)
  watch(["app/components/*", "app/pages/*"], html)
  watch(["app/**/*.html"]).on("change", browserSync.reload)
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    },
  });
}

function cleanDist() {
  return src("dist")
    .pipe(clean())
}

function building() {
  return src(
    [
      "app/css/core.min.css",
      "app/images/**/*.*",
      "app/fonts/**/*.*",
      "app/js/main.min.js",
      "app/**/*.html"
    ],
    { base: "app" })
    .pipe(dest("dist"));
}

exports.fonts = fonts;
exports.styles = styles;
exports.html = html;
exports.images = images;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.building = building;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, scripts, html, watching, browsersync);