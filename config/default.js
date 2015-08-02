var dest = 'public';
var src = 'app';

module.exports = {
  style: {
    src: src + '/assets/style/**/*.scss',
    dest: dest + '/style',
  },

  template: {
    src: src + '/assets/template/**/*.html',
    dest: dest + '/template',
  },

  minify: {
    src: dest + '/assets/js/*.js',
    dest: dest + '/js/min',
  },

  browserify: {
    entry: {
      entries: src + '/assets/js/app.js',
      debug: true
    },
    dest: dest + '/js',
    output: {
      filename: 'bundle.js'
    }
  },
}
