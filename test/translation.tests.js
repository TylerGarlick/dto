'use strict';

let Translator = require('../lib/translator');

describe('Translator', function() {

  it('should be able to translate a simple object', function() {
    let person = { name: { first: 'Bob', last: 'Sagot' }, age: 50 };
    let dto = { name: '#/name/first' };

    expect(Translator._translateWithPointer(person, dto)).to.be.eql({ name: 'Bob' });

  });

  it('should be able to translate a simple object', function() {
    let person = { name: { first: 'Bob', last: 'Sagot' }, age: 50 };
    let dto = { name: '#/name/first' };

    expect(Translator.translate(person, dto)).to.be.eql({ name: 'Bob' });
  });

  it('should be able to translate a simple object', function() {
    let person = { name: { first: 'Bob', last: 'Sagot' }, age: 50 };
    let dto = { name: 'name.first' };

    expect(Translator.translate(person, dto)).to.be.eql({ name: 'Bob' });
  });


});
