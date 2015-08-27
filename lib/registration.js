'use strict';

let Lazy = require('lazy.js');
let __storage = {};

/**
 * Registration integration
 */
class Registration {

  /**
   * Get's all the registrations
   * @returns {{}}
   */
  all() {
    return __storage;
  }

  /**
   * Determines if the registration is setup
   * @param {string} name
   * @returns {boolean}
   */
  exists(name) {
    return new Lazy(__storage).get(name) !== undefined;
  }

  /**
   * Setups up a registration
   * @param {string} name
   * @param {object} schema
   */
  register(name, schema) {
    __storage[name] = schema;
  }

  /**
   * Remove a registration
   * @param {} name
   */
  remove(name) {
    if (this.exists(name)) {
      delete __storage[name];
    }
  }

  reset() {
    __storage = {};
  }

}

module.exports = Registration;