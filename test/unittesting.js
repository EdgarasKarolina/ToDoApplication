var expect  = require('chai').expect;
require( 'mocha-directory' )();

var mockito = require('mokjs');

var greetings = require("./../javascript/functions.js");

describe("printName()", function(){
    
    it("testing if user name is between 3 and 15 characters, inserting 3 characters", function(){
        var result = greetings.checkUserNames("Joc");
        expect(result).to.equal(true);
    });

    it("testing if user name is between 3 and 15 characters, inserting 2 characters", function(){
        var result = greetings.checkUserNames("Jo");
        expect(result).to.equal(false);
    });

    it("testing if user name is between 3 and 15 characters, inserting 4 characters", function(){
        var result = greetings.checkUserNames("John");
        expect(result).to.equal(true);
    });

    it("testing if user name is between 3 and 15 characters, inserting 14 characters", function(){
        var result = greetings.checkUserNames("1234567890John");
        expect(result).to.equal(true);
    });

    it("testing if user name is between 3 and 15 characters, inserting 15 characters", function(){
        var result = greetings.checkUserNames("12345678901John");
        expect(result).to.equal(true);
    });

    it("testing if user name is between 3 and 15 characters, inserting 16 characters", function(){
        var result = greetings.checkUserNames("123456789012John");
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

    it("testing if message is not longer than 60 characters, inserting 59", function(){
        var message = "qwertyuiop[asdfghjkl;'zxcvbnm,./qwertyuiop[asdfghjkl;zxcvbn";
        var result = greetings.maximum60Characters(message.length);
        expect(result).to.equal(true);
    });

    it("testing if message is not longer than 60 characters, inserting 60", function(){
        var message = "qwertyuiop[asdfghjkl;'zxcvbnm,./qwertyuiop[asdfghjkl;zxcvbnu";
        var result = greetings.maximum60Characters(message.length);
        expect(result).to.equal(true);
    });

    it("testing if message is not longer than 60 characters, inserting 61", function(){
        var message = "qwertyuiop[asdfghjkl;'zxcvbnm,./qwertyuiop[asdfghjkl;zxcvbnur";
        var result = greetings.maximum60Characters(message.length);
        expect(result).to.equal(false);
    });

    it("testing if message was added", function(){
        
     });

    it("testing if message was deleted", function(){
        
     });

});