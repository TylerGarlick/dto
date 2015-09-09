'use strict';

let Lazy = require('lazy.js');
let Pointers = require('./utils/pointers');
let Hoek = require('hoek');

/**
 * Translator handles the mapping between a source object and a dto
 * @public
 * @class
 */
class Translator {

  static translate(source, dto, options) {
    let first = Translator._getKeys(dto).first();
    let value = dto[first];
    if (Pointers.isValid(value) || Pointers.isCompound(value)) {
      return Translator._translateWithPointer(source, dto, options);
    }
    return Translator._translateWithMap(source, dto, options);
  }

  /**
   * Translates an object to a dto defined by a json pointer
   * @public
   * @param {Object} source
   * @param {Object} dto
   * @param {Object} [options]
   * @returns {Object|Array}
   */
  static _translateWithPointer(source, dto, options) {
    options = options || {};

    let translated = {};
    let keys = Translator._getKeys(dto).toArray();

    for (let key of keys) {
      translated[key] = Pointers.getValue(source, dto[key]);
    }
    return translated;
  }

  static _translateWithMap(source, transform, options) {
    return Hoek.transform(source, transform, options);
  }

  /**
   * Gets the keys of an object
   * @private
   * @param {Object|Array} obj
   * @returns {T[]|Array}
   */
  static _getKeys(obj) {
    return new Lazy(obj).keys();
  }
}

module.exports = Translator;