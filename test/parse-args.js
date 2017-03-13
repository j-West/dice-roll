
const parseArgs = require('../lib/parse-args');
const { assert } = require('chai');


describe('parse-args.js', function() {
  describe('parse-args())', function() {
    it('parseArgs() should be a function', function() {
      assert.isFunction(parseArgs);
    });
    it('parseArgs() should return an object', function() {
        assert.isObject(parseArgs(1, 6));
    });
    it('parseArgs(1, 6) should return and object with a property "count"', function() {
      assert.property(parseArgs(1, 6), 'count');
    });
    it('parseArgs(1, 6) should return and object with a property "sides"', function() {
      assert.property(parseArgs(1, 6), 'sides');
    });
    it('parseArgs() should return and object with a property value of { count: 1 }', function() {
      assert.propertyVal({ count: '1' }, 'count', '1');

    });
    it('parseArgs() should return and object with a property value of { count: 1 }', function() {
      assert.propertyVal({ sides: '6' }, 'sides', '6');

    });
  });
});
