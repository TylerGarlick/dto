'use strict';

var expect = require('chai').expect;
var Projection = require('../lib/projection');

describe('Projection', function () {

  it('should setup correctly', function () {
    var projection = new Projection();
    expect(projection).to.be.ok;
  });

});