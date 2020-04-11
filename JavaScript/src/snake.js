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
  const calculatedNextHead = nextHead(state.move, state.snake);
  if (willEat(calculatedNextHead, state.apple)) {
    return {
      ...state,
      snake: [calculatedNextHead, ...state.snake],
    };
  }

  return {
    ...state,
    snake: [calculatedNextHead, ...r.dropLast(1, state.snake)],
  };
};

const nextApple = (state) => {
  if (!willEat(state.snake[0], state.apple)) return state;
  return { ...state, apple: point(rnd(0)(15 - 1), rnd(0)(15 - 1)) };
};

const step = (state) => {
  return r.pipe(nextSnake, nextApple)(state);
};

module.exports = { initialState, addMove, direction, step };
