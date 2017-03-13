
const exec = require('child_process').exec;
const { assert } = require('chai');


describe('cli.js', function() {
  describe('running the cli.js file', function() {
    it('should return a number', function() {
      let final = 0;
      exec("node bin/diceroll", (err, stdout, stderr) => {
        if (err) {
          console.log('Error', err);
          return;
        }
        assert.oneOf(stdout,[1, 2, 3, 4, 5, 6]);
      })
    });
  });
});
