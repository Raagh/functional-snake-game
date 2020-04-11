const r = require("ramda");
const { intercalate, update } = require("./helper");

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

const display = r.curry((rows, columns, state) => {
  return r.pipe(createWorld, displayWorld)(rows, columns, state);
});

module.exports = {
  display,
};
