const r = require("ramda");

const set = str => pos =>
  r.adjust(
    pos.y,
    r.adjust(pos.x, () => str)
  );

const createWorld = (rows, columns, state) => {
  const repeatDot = r.repeat(".");
  const matrix = r.map(r.thunkify(repeatDot)(rows), repeatDot(columns));

  return r.pipe(addSnake(state), addApple(state))(matrix);
};

const addSnake = state => r.pipe(...r.map(set("X"), state.snake));

const addApple = state => set("O")(state.apple);

const displayWorld = matrix => {
  console.clear();
  console.log("\x1Bc" + r.map(xs => xs.join(" "), matrix).join("\r\n"));
};

const display = (rows, columns, state) => {
  return r.pipe(createWorld, displayWorld)(rows, columns, state);
};

module.exports = {
  display
};
