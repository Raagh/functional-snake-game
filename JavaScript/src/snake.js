const r = require("ramda");

const point = (x, y) => {
  return {
    x: x,
    y: y
  };
};

const direction = {
  NORTH: point(0, -1),
  SOUTH: point(0, 1),
  WEST: point(-1, 0),
  EAST: point(1, 0)
};

const state = {
  snake: [point(4, 3), point(3, 3), point(2, 3)],
  apple: point(5, 5),
  move: null
};

const addMove = direction => {
  state.move = direction;
  console.log(direction);
};

// const nextHead = (head, direction) =>
//   point(head.x + direction.x, head.y + direction.y);

const nextSnake = () => {
  // if (state.move) {
  //   return {
  //     ...state,
  //     snake: [nextHead(state.snake[0]), r.dropLast(1, state.snake)]
  //   };
  // }

  if (state.move) {
    state.snake.pop();
    state.snake = [
      point(state.snake[0].x + state.move.x, state.snake[0].y + state.move.y),
      ...state.snake
    ];
  }
};

const step = () => {
  nextSnake();
};

module.exports = { state, addMove, direction, step };
