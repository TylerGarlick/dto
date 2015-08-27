'use strict';

var expect = require('chai').expect;
var DTO = require('../lib');

describe('Projection', function () {

  var dto;
  before(function () {
    dto = new DTO();
    expect(dto).to.be.ok;
  });

  it('should have a #projections property', function () {
    expect(dto.projection).to.be.ok;
  });

  it('should have a #transformer property', function () {
    expect(dto.transformer).to.be.ok;
  });

});