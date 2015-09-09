'use strict';

let Projection = require('./projector');
let Translator = require('./translator');
let Hoek = require('hoek');


/**
 * DTO Framework and utilities for transformations
 * @public
 * @constructor
 */
class DTO {

  static get take() {
    return Projection;
  }

  static translate(source, dto, options) {
    return Translator.translate(source, dto, options);
  }

  static merge(target, source, options) {
    options = options || { isNullOverride: true, isMergeArrays: true };
    return Hoek.merge(target, source, options.isNullOverride, options.isMergeArrays);
  }

}

module.exports = DTO;