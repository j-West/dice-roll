
const randomInt = (lower, upper) => {
    return Math.ceil(Math.random() * (upper - lower) + lower);
}

module.exports = { randomInt };
