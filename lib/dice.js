
const { randomInt } = require('./math');

const toDiceNotation = (diceObj) => {
  return `${diceObj.count}d${diceObj.sides}`
};

const roll = (notationStr) => {
  let diceArray = notationStr.split('d');
  randomInt();
}

module.exports = { toDiceNotation, roll };
