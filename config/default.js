var dest = 'public';
var src = 'app';

module.exports = {
  style: {
    src: src + '/assets/style/**/*.scss',
    dest: dest + '/style',
  },

  minify: {
    src: dest + 'assets/js/*.js',
    dest: dest + '/js/min',
  },

  browserify: {
    entry: {
      entries: src + '/js/main.js',
      debug: true
    },
    dest: dest + '/js',
    output: {
      filename: 'bundle.js'
    }
  },
}
