'use strict';

var dto = require('../lib');

describe('Projection', function() {

  describe('#take', function() {

    it('should take only', function() {
      let person = { name: { first: 'Bob', last: 'Sagot' }, age: 50 };
      expect(dto.take.only(person, ['age'])).to.be.eql({ age: 50 });
    });

    it('should return without', function() {
      let person = { name: { first: 'Bob', last: 'Sagot' }, age: 50 };
      expect(dto.take.without(person, ['age'])).to.be.eql({ name: { first: 'Bob', last: 'Sagot' } });
    });

  });

});
