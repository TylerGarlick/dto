'use strict';

let Lazy = require('lazy.js');
let Hoek = require('hoek');

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
  static remove(source, properties) {
    return new Lazy(source).omit(properties).toObject();
  }

  /**
   * Translates the object
   * @param {Object} source
   * @param {Object} translation
   * @returns {Object|Array}
   */
  static translate(source, translation) {
    return Hoek.transform(source, translation);
  }

}


module.exports = Projector;