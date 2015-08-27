'use strict';

var Projection = require('./projection');
var Transformer = require('./transformer');

/**
 * DTO Framework and utilities for transformations
 * @public
 * @constructor
 */
function DTO() {
  this.projection = new Projection();
  this.transformer = new Transformer();
}

module.exports = DTO;