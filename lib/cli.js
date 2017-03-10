

let dice = require('./parse-args')(process.argv.splice(2));

const { toDiceNotation, roll } = require('./dice');

let again = roll(toDiceNotation(dice));
console.log(again);
