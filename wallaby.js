'use strict';

module.exports = function () {
  return {
    files: [
      'lib/**/*'
    ],
    tests: [
      'test/**/*.tests.js'
    ],
    env: {
      type: 'node'
    }
  }
};