var dest = 'public';
var src = 'app';

module.exports = {
  style: {
    src: src + '/assets/style/**/*.scss',
    dest: dest + '/style',
  },

  template: {
    src: src + '/assets/**/*.{html,jade}',
    dest: dest + '/',
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
