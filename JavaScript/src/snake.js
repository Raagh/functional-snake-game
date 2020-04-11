const r = require("ramda");
const mod = (x) => (y) => ((y % x) + x) % x;
const rnd = (min) => (max) => Math.floor(Math.random() * max) + min;

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

const willEat = (head, apple) => head.x == apple.x && head.y == apple.y;

const addMove = (direction, state) => {
  return { ...state, move: direction };
};

const nextHead = (direction, snake) =>
  point(mod(15)(snake[0].x + direction.x), mod(15)(snake[0].y + direction.y));

const nextSnake = (state) => {
  const calculatedHead = nextHead(state.move, state.snake);
  return {
    ...state,
    snake: willEat(calculatedHead, state.apple)
      ? [calculatedHead, ...state.snake]
      : [calculatedHead, ...r.dropLast(1, state.snake)],
  };
};

const nextApple = (state) =>
  !willEat(state.snake[0], state.apple)
    ? state
    : { ...state, apple: point(rnd(0)(15 - 1), rnd(0)(15 - 1)) };

const step = (state) => {
  return r.pipe(nextSnake, nextApple)(state);
};

module.exports = { initialState, addMove, direction, step };
