const modulo = (x) => (y) => ((y % x) + x) % x;
const rnd = (min) => (max) => Math.floor(Math.random() * max) + min;

module.exports = { modulo, rnd };
