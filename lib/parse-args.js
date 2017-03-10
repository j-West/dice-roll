

module.exports = parseArgs = (args) => {
  let diceInfo = {};
  diceInfo.count = args[1] ? args[0] : 1;
  diceInfo.sides = args[1] ? args[1] : args[0] || 6;
  return diceInfo;
}
