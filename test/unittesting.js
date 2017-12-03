var expect  = require('chai').expect;
require( 'mocha-directory' )();

var greetings = require("./../javascript/functions.js");

describe("printName()", function(){
    it("testing if user name is between 3 and 15 characters", function(){
        var result = greetings.checkUserNames("Jonaitis");
        expect(result).to.equal(true);
    });

    it("testing if password contains number", function(){
        var result = greetings.checkPasswords("kazkada56");
        expect(result).to.equal(true);
    });

    it("testing if password contains upper case letter", function(){
        var result = greetings.containsUpperCases("k65azkdaS");
        expect(result).to.equal(true);
    });

    it("testing if message is not empty", function(){
       
    });

    it("testing if message was added", function(){
        
     });

    it("testing if message was deleted", function(){
        
     });

});