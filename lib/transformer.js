'use strict';

var Hoek = require('hoek');
var Lazy = require('lazy.js');

/**
 * Performs a transformation
 * @constructor
 */
function Transformer() {

}

Transformer.prototype.map = function (source, map, options) {
  return Hoek.transform(source, map, options);
};

Transformer.prototype.allow = function (source, properties) {
  source = source || {};
  properties = properties || [];
  return Lazy(source).pick(properties);
};

Transformer.prototype.restrict = function (source, properties) {
  source = source || {};
  properties = properties || [];
  return Lazy(source).omit(properties);
};

Transformer.prototype.mapWithPointer = function (source) {

};

module.exports = Transformer;
