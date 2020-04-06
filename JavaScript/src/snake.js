const r = require("ramda");

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
  snake: [point(4, 3), point(3, 3), point(2, 3)],
  apple: point(5, 5),
  move: direction.EAST,
};

const addMove = (direction) => {
  state.move = direction;
};

const nextHead = r.curry((direction, snake) =>
  point(snake[0].x + direction.x, snake[0].y + direction.y)
);

const nextSnake = (state) => {
  if (!state.move) return;

  return {
    ...state,
    snake: [nextHead(state.move, state.snake), ...r.dropLast(1, state.snake)],
  };
};

const step = (state) => {
  return nextSnake(state);
};

module.exports = { initialState, addMove, direction, step };
