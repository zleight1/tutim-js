'use strict';
const chai = require('chai');
chai.should();
const Strawberry = require('./strawberry');

describe('Strawberry', function() {
    let myStrawberry;
    before(function() {
        myStrawberry = new Strawberry();
    })
    it('should be valid', function() {
        myStrawberry.should.not.be.undefined;
    });

    it('should sweeten with a blank noun', function() {
        const message = myStrawberry.sweeten();
        message.should.eql('Our life is strawberries.');
    });

    it('should sweeten with a noun', function() {
        const message = myStrawberry.sweeten('Foo\'s');
        message.should.eql('Foo\'s life is strawberries.');
    });
});
