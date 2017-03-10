#!/usr/bin/env node

const { toDiceNotation, roll } = require('./dice');

// let dice = require('./parse-args')(process.argv.splice(2));
// let final = roll(toDiceNotation(dice));

let final = roll(toDiceNotation(require('./parse-args')(process.argv.splice(2))));

console.log(final);
