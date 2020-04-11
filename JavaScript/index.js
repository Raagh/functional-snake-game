const { display } = require("./src/ui");
const { initialState, step, direction, addMove } = require("./src/snake");
const readline = require("readline");

let uglyMutableState = initialState;

const setupInput = () => {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") process.exit();

    const options = {
      UP: (state) => addMove(direction.NORTH, state),
      LEFT: (state) => addMove(direction.WEST, state),
      DOWN: (state) => addMove(direction.SOUTH, state),
      RIGHT: (state) => addMove(direction.EAST, state),
    };

    const move = options[key.name.toUpperCase()];
    uglyMutableState = move(uglyMutableState);
  });
};

const COLUMNS = 15;
const ROWS = 15;
const SPEED = 125;

const displayState = display(COLUMNS, ROWS);
const nextState = step(COLUMNS, ROWS);

const runGameLoop = () => {
  setupInput();
  setInterval(() => {
    displayState(uglyMutableState);
    uglyMutableState = nextState(uglyMutableState);
  }, SPEED);
};

runGameLoop();
