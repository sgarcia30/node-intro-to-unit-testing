const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('Prints out the given input or for multiples of three prints fizz or for multiples of five prints buzz or for multiples of both prints fizz-buzz', function() {
    // range of normal inputs
    const normalCases = [
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 1, expected: 1}
    ];
    // for each input (a), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {
    // range of bad inputs where input is not a number
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});