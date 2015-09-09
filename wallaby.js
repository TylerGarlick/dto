'use strict';

module.exports = function () {
  return {
    files: [
      'lib/**/*',
      'test/**/*',
      { pattern: 'test/**/*.tests.js', ignore: true }
    ],
    tests: [
      'test/**/*.tests.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    bootstrap: function() {
      require('./test/_helper')
    }
  }
};