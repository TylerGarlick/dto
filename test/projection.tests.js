'use strict';

let expect = require('chai').expect;
let Projection = require('../lib/projector');
let Lazy = require('lazy.js');

describe('Projection', function() {

  it('should setup correctly', function() {
    var projection = new Projection();
    expect(projection).to.be.ok;
  });

  describe('#only', function() {

    it('should grab only the properties', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      let result = Projection.only(source, ['is']);
      expect(result.is).to.be.empty;
    });

    it('should return a naked object', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      expect(Projection.only(source, [])).to.be.eql({});
    });

    it('should return the full object', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      const keys = Lazy(source).keys().toArray();
      expect(Projection.only(source, keys)).to.be.eql(source);
    });

  });

  describe('#remove', function() {

    it('should remove properties', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      let result = Projection.remove(source, ['here', 'my', 'thing']);
      expect(result.is).to.be.empty;
    });

    it('should return a naked object', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      expect(Projection.remove(source, [])).to.be.eql(source);
    });

    it('should return the full object', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      expect(Projection.remove(source, ['here', 'is', 'my'])).to.be.eql({ thing: null });
    });

  });

  describe('#translate', function() {

    it('should be able to translate', function() {
      const source = { here: '', is: '', my: 1, thing: null };
      let result = Projection.translate(source, { 'blah': 'thing' });
      expect(result).to.be.eql({ blah: null });
    });

  });


});