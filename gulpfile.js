var gulp = require('gulp'),
  browserSync = require('browser-sync');

var paths = {
  "vhost": "wordpress.local",
  "themes": "../www/wordpress/wp-content/themes/twentyfourteen/**"
}

gulp.task('bs-init', function() {
  browserSync.init(null, {
    proxy: paths.vhost,
    notify: true
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload()
});

gulp.task('watch', function() {
  gulp.watch([paths.themes], ['bs-reload']);
});

gulp.task('default', ['bs-init', 'bs-reload', 'watch']);
