export type Cols = number;
export type Rows = number;
export type Point = [Cols, Rows];
export type Snake = Point[];
export type Apple = Point;

const initialSnake: Snake = [
  [0, 0],
  [0, 1]
];
const initialApple: Apple = [5, 5];

export enum Direction {
  North,
  South,
  West,
  East
}

export interface State {
  snake: Snake;
  moves: [Direction];
  apple: Apple;
}

export const initialState: State = {
  snake: initialSnake,
  moves: [Direction.North],
  apple: initialApple
};

const moveSnake = (state: State) => {
  return {
    snake: [...state.snake, [0, 2]],
    moves: state.moves,
    apple: state.apple
  };
};

export const step = (state: State) => moveSnake(state);
