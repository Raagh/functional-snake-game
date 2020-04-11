const r = require("ramda");

const modulo = (x) => (y) => ((y % x) + x) % x;
const rnd = (min) => (max) => Math.floor(Math.random() * max) + min;
const update = r.curry((str, pos) =>
  r.adjust(
    pos.y,
    r.adjust(pos.x, () => str)
  )
);

const intercalate = r.curry((str, xs) => xs.join(str));

module.exports = { modulo, rnd, intercalate, update };
