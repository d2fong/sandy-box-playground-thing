var expect = require("chai").expect;
var index = require('../index.js');

describe("Kaprekar number challenge", function() {
  describe("kaprekar predicate", function() {
    it("should determine if a positive integer is a kaprekar number", function() {
      var input = [9, 16, 45];
      var output = [true, false, true];      

      for (var i = 0; i < input.length; i++) {
        expect(input[i].to.equal(output[i]);
      }
    });
  });
});
