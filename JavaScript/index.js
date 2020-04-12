const { display } = require("./src/ui");
const { initialState, step, direction, addMove } = require("./src/snake");
const readline = require("readline");

const COLUMNS = 15;
const ROWS = 15;
const SPEED = 125;
let uglyMutableState = initialState;

const setupInput = () => {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") process.exit();

    const options = {
      UP: addMove(direction.NORTH),
      LEFT: addMove(direction.WEST),
      DOWN: addMove(direction.SOUTH),
      RIGHT: addMove(direction.EAST),
    };

    const move = options[key.name.toUpperCase()];
    uglyMutableState = move(uglyMutableState);
  });
};

const displayState = display(COLUMNS, ROWS);
const nextState = step(COLUMNS, ROWS);

const runGameLoop = () => {
  setInterval(() => {
    displayState(uglyMutableState);
    uglyMutableState = nextState(uglyMutableState);
  }, SPEED);
};

// const runGameLoop = (state) => {
//   displayState(state);
//   runGameLoop(nextState(state));
// }

setupInput();
runGameLoop();
