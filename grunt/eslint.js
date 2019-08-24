'use strict';

module.exports = {
  options: {
    configFile: '.eslintrc.json'
  },
  target: [
    '**/*.js',
    '!node_modules/**/*.js',
    '!bower_components/**/*.js',
    '!dist/**/*.js'
  ]
};
