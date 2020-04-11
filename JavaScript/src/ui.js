const r = require("ramda");

const update = r.curry((str, pos) =>
  r.adjust(
    pos.y,
    r.adjust(pos.x, () => str)
  )
);

const intercalate = r.curry((str, xs) => xs.join(str));

const createWorld = (rows, columns, state) => {
  const repeatDot = r.repeat(".");

  const map = r.map(r.thunkify(repeatDot)(rows), repeatDot(columns));

  return r.pipe(addSnake(state), addApple(state))(map);
};

const addSnake = (state) => r.pipe(...r.map(update("X"), state.snake));

const addApple = (state) => update("O")(state.apple);

const displayWorld = (matrix) => {
  console.clear();
  console.log(intercalate("\r\n", r.map(intercalate(" "), matrix)));
};

const display = (rows, columns, state) => {
  return r.pipe(createWorld, displayWorld)(rows, columns, state);
};

module.exports = {
  display,
};
