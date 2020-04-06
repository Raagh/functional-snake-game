const { display } = require("./src/ui");
const { initialState, step } = require("./src/snake");
require("./src/input");

let count = 0;
let uglyMutableState = initialState;

const runGameLoop = () => {
  setInterval(() => {
    display(15, 15, uglyMutableState);
    uglyMutableState = step(uglyMutableState);
    count++;
    console.log(count);
  }, 200);
};

runGameLoop();
