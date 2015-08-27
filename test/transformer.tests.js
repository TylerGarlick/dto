'use strict';

var expect = require('chai').expect;
var Transformer = require('../lib/transformer');

describe('Projection', function () {

  it('should setup correctly', function () {
    var transformer = new Transformer();
    expect(transformer).to.be.ok;
  });

});