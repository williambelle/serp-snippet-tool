// Copy files
module.exports = {
  buildChrome: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'css/**', 'images/**', '*.html', 'manifest.json',],
      dest: 'dist/chrome/',
      nonull: true,
    },],
  },
  buildFirefox: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'css/**', 'images/**', '*.html', 'manifest.firefox.json',],
      dest: 'dist/firefox/',
      nonull: true,
    },],
  },
};
