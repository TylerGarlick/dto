'use strict';

let expect = require('chai').expect;
let Registration = require('../lib/registration');

describe('Registration', function() {

  let registration;
  before(function() {
    registration = new Registration();
    expect(registration).to.be.ok;
  });

  afterEach(function() {
    registration.reset();
  });

  it('should be empty when initialized', function() {
    expect(registration.all()).to.be.empty;
  });

  it('should register successfully', function() {
    const blah = 'blah';
    registration.register(blah, {});
    expect(registration.exists(blah)).to.be.true;
  });

  it('should remove successfully', function() {
    const blah = 'blah';
    registration.register(blah, {});
    expect(registration.exists(blah)).to.be.true;

    registration.remove(blah);
    expect(registration.exists(blah)).to.be.false;
  });

});