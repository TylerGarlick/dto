'use strict';

let Lazy = require('lazy.js');
let Pointer = require('json-ptr');

class Pointers {

  static getValue(source, pointer) {
    let value = '';
    if (Pointers.isValid(pointer)) {
      value = Pointer.get(source, pointer);
    }
    return value;
  }

  static decompileCompound(pointer) {
    let pieces = [];
    if (Pointers.isCompound(pointer)) {
      pieces = new Lazy(pointer.split(' ')).where(Pointers.isValid).toArray();
    }
    return pieces;
  }

  static isCompound(pointer) {
    return new Lazy(pointer) && new Lazy(pointer.split(' ')).some(Pointers.isValid);
  }

  static isValid(pointer) {
    return new Lazy(pointer).startsWith('/') || new Lazy(pointer).startsWith('#/');
  }
}

module.exports = Pointers;
