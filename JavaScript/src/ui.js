const r = require("ramda");

const func = value => () => value;

const createWorld = (rows, columns) => {
  const repeatDot = r.repeat(".");
  return r.map(func(repeatDot(rows)), repeatDot(columns));
};

const displayWorld = matrix => {
  console.clear();
  console.log("\x1Bc" + r.map(xs => xs.join(" "), matrix).join("\r\n"));
};

const display = (rows, columns, state) => {
  return r.pipe(createWorld, displayWorld)(rows, columns);
};

module.exports = {
  display
};
