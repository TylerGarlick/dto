'use strict';

var Lazy = require('lazy.js');

/**
 * Projector for the object
 * @constructor
 */
function Projection() { }

/**
 * Allow properties on object
 * @pubilc
 * @param {object} source
 * @param {Array<string>} properties
 * @returns {object}
 */
Projection.prototype.allow = function(source, properties) {
  source = source || {};
  properties = properties || [];
  return Lazy(source).pick(properties);
};

/**
 * Restrict properties
 * @param {object} source
 * @param {Array<string>} properties
 * @returns {object}
 */
Projection.prototype.restrict = function(source, properties) {
  source = source || {};
  properties = properties || [];
  return Lazy(source).omit(properties);
};

module.exports = Projection;