var expect  = require('chai').expect;
require( 'mocha-directory' )();

var greetings = require("./../javascript/functions.js");

describe("printName()", function(){
    it("testing if user name is between 3 and 15 characters, inserting 8 characters", function(){
        var result = greetings.checkUserNames("Jonaitis");
        expect(result).to.equal(true);
    });

    it("testing if user name is between 3 and 15 characters, inserting 2 characters", function(){
        var result = greetings.checkUserNames("Jo");
        expect(result).to.equal(false);
    });

    it("testing if user name is between 3 and 15 characters, inserting 16 characters", function(){
        var result = greetings.checkUserNames("1234567891234567");
        expect(result).to.equal(false);
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
        var result = greetings.isNotEmpty("message");
        expect(result).to.equal(true);
    });

    it("testing if message was added", function(){
        
     });

    it("testing if message was deleted", function(){
        
     });

});