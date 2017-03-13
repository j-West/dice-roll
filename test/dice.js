
const { toDiceNotation, roll} = require('../lib/dice');
const { assert } = require('chai');

describe('dice.js', function() {
describe('toDiceNotation()', function() {
    it('toDiceNotation() should be a function', function() {
      assert.isFunction(toDiceNotation);
    });
    it('toDiceNotation() should return a string', function() {
      assert.isString(toDiceNotation({count: 1, sides: 6}));
    });
    it('toDiceNotation() should return a string that includes the char "d"', function() {
      let test = toDiceNotation({count: 1, sides: 6});
      assert.include(test, 'd');
    });
});

describe('roll()', function() {
    it('roll() should be a function', function() {
      assert.isFunction(roll);
    });
    it('roll() should return a number', function() {
      assert.isNumber(roll("1d6"));
    });
    it('roll() should return a number between 1 and 6', function() {
      assert.oneOf(roll("1d6"), [1, 2, 3, 4, 5, 6]);
    });
  });
});
