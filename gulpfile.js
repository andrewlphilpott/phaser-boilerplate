var paths = {
  src: {
    dir: 'src/assets',
    scssDir: 'src/assets/scss',
    scssAll: 'src/assets/scss/**/*.scss',
    jsDir: 'src/assets/js',
    jsAll: 'src/assets/js/**/*.js',
    plugins: 'src/assets/js/vendor/**/*.js',
    imgDir: 'src/assets/img',
    imgAll: 'src/assets/img/**/*',
    html: 'src/**/*.html'
  },
  dest: {
    dir: 'public',
    css: 'public/assets/css',
    js: 'public/assets/js',
    img: 'public/assets/img',
    html: 'public'
  }
};

// Include gulp
var gulp = require('gulp');

// Include Packages
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');
var copy = require('gulp-copy');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Minify Images
gulp.task('imagemin', function(){
  return gulp.src(paths.src.imgAll)
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest(paths.dest.img));
});

// Compile SASS
gulp.task('sass', function(){
  return gulp.src(paths.src.scssAll)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', function(err){
      console.log(err.toString());
      this.emit('end');
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(paths.dest.css))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

// Concatenate & Minify Main JS
gulp.task('scripts', function() {
  return gulp.src([
    paths.src.jsDir + '/states/boot.js',
    paths.src.jsDir + '/states/load.js',
    paths.src.jsDir + '/states/neatfun.js',
    paths.src.jsDir + '/states/title.js',
    paths.src.jsDir + '/states/level01.js',
    paths.src.jsDir + '/states/gameover.js',
    paths.src.jsDir + '/states/game.js'
  ])
    .pipe(concat('game.js'))
    .pipe(uglify())
    .on('error', function(err){
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(rename('game.min.js'))
    .pipe(gulp.dest(paths.dest.js));
});

// Concatenate & Minify Phaser
gulp.task('phaser', function() {
  return gulp.src(paths.src.jsDir + '/phaser.js')
    .pipe(uglify())
    .on('error', function(err){
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(rename('phaser.min.js'))
    .pipe(gulp.dest(paths.dest.js));
});

// Compile HTML
gulp.task('html', function(){
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dest.html));
});

// BrowserSync
gulp.task('serve', function(){
  browserSync.init({
    server: './public',
    baseDir: paths.dest.dir,
    port: 3001
  });

  gulp.watch(paths.dest.templates + '/**/*.html').on('change', reload);
  gulp.watch(paths.dest.js + '/*.js').on('change', reload);
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(paths.src.imgAll, ['imagemin']);
  gulp.watch(paths.src.scssAll, ['sass']);
  gulp.watch(paths.src.jsDir + '/phaser.js', ['phaser']);
  gulp.watch(paths.src.jsAll, ['scripts']);
  gulp.watch(paths.src.html, ['html']);
});

// Default Task
gulp.task('default', ['serve', 'imagemin', 'sass', 'phaser', 'scripts', 'html', 'watch']);
