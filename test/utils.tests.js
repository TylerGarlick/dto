'use strict';

let Pointers = require('../lib/utils/pointers');

describe('Utils', function() {

  describe('Pointers', function() {

    describe('#isValid(pointer)', function() {

      it('should be able to discern valid pointers', function() {
        expect(Pointers.isValid('/foo')).to.be.true;
        expect(Pointers.isValid('#/foo')).to.be.true;
        expect(Pointers.isValid('foo')).to.be.false;
      });

    });

    describe('#isCompound(pointer)', function() {

      it('should be able to determine if the pointer is a compound', function() {
        expect(Pointers.isCompound('/foo /bar')).to.be.true;
        expect(Pointers.isCompound('#/foo #/bar')).to.be.true;
        expect(Pointers.isCompound('#/foo bar')).to.be.true;
        expect(Pointers.isCompound('foo bar')).to.be.false;
      });

    });

    describe('#decompileCompound(pointer)', function() {

      it('should return the pointers', function() {
        expect(Pointers.decompileCompound('#/foo #/bar')).to.be.eql(['#/foo', '#/bar']);
        expect(Pointers.decompileCompound('#/foo bar')).to.be.eql(['#/foo']);
      });

    });

    describe('#getValue(source, pointer)', function() {

      it('should return the pointers', function() {
        let person = { name: 'Bob', age: 33, hobbies: ['snowboarding', 'rollerblading'] };
        expect(Pointers.getValue(person, '/name')).to.be.eql('Bob');
        expect(Pointers.getValue(person, '/age')).to.be.eql(33);
        expect(Pointers.getValue(person, '/hobbies')).to.be.eql(['snowboarding', 'rollerblading']);
      });

    });

  });

});
