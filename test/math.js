
const { randomInt } = require('../lib/math');
const { assert } = require('chai');


describe('math.js', function() {
  describe('randomInt()', function() {
    it('randomInt() should be a function', function() {
      assert.isFunction(randomInt);
    });
    it('randomInt() should return a number', function() {
        assert.isNumber(randomInt(1, 6));
    });
    it('randomInt() should return one of the following', function() {
      for (var i = 0; i < 100; i++) {
        assert.oneOf(randomInt(1, 6),[1, 2, 3, 4, 5, 6]);
      }
    });
  });
});
