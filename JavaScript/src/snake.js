const r = require("ramda");
const { rnd, modulo } = require("./helper");

const point = (x, y) => {
  return {
    x: x,
    y: y,
  };
};

const direction = {
  NORTH: point(0, -1),
  SOUTH: point(0, 1),
  WEST: point(-1, 0),
  EAST: point(1, 0),
};

const initialState = {
  snake: [point(4, 3)],
  apple: point(5, 5),
  move: direction.EAST,
};

const randomPos = (pos) => rnd(0)(pos - 1);

const isValidMove = (direction, move) =>
  direction.x + move.x !== 0 && direction.y + move.y !== 0;

const willEat = r.equals;
const willCrash = (cols, rows, state) =>
  r.find(r.equals(nextHead(cols, rows, state)))(state.snake);

const addMove = (direction, state) =>
  isValidMove(direction, state.move) ? { ...state, move: direction } : state;

const nextHead = (cols, rows, { move, snake }) =>
  point(
    modulo(cols)(r.head(snake).x + move.x),
    modulo(rows)(r.head(snake).y + move.y)
  );

const nextSnake = r.curry((cols, rows, state) => {
  return willCrash(cols, rows, state)
    ? initialState
    : {
        ...state,
        snake: willEat(nextHead(cols, rows, state), state.apple)
          ? [nextHead(cols, rows, state), ...state.snake]
          : [nextHead(cols, rows, state), ...r.dropLast(1, state.snake)],
      };
});

const nextApple = r.curry((cols, rows, state) =>
  willEat(r.head(state.snake), state.apple)
    ? { ...state, apple: point(randomPos(cols), randomPos(rows)) }
    : state
);

const step = r.curry((cols, rows, state) =>
  r.pipe(nextSnake(cols, rows), nextApple(cols, rows))(state)
);

module.exports = { initialState, addMove, direction, step };
