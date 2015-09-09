'use strict';

let Lazy = require('lazy.js');

/**
 * Object Projector
 * @public
 * @constructor
 */
class Projector {

  /**
   * Takes only the properties provided
   * @public
   * @static
   * @param {Object} source
   * @param {Array<string>} properties
   * @returns {Object}
   */
  static only(source, properties) {
    return new Lazy(source).pick(properties).toObject();
  }

  /**
   * Remove properties from source object
   * @public
   * @static
   * @param {Object} source
   * @param {Array<string>} properties
   * @returns {Object}
   */
  static without(source, properties) {
    return new Lazy(source).omit(properties).toObject();
  }

}

module.exports = Projector;