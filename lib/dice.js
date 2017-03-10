
const { randomInt } = require('./math');


const toDiceNotation = (diceObj) => {
  return `${diceObj.count}d${diceObj.sides}`
};


const roll = (notationStr) => {
  let diceArray = notationStr.split('d');
  let finalRoll = 0;

  for (var i = 0; i < diceArray[0]; i++) {
    finalRoll += randomInt(0, diceArray[1]);

  }
  return finalRoll;
}


module.exports = { toDiceNotation, roll };
