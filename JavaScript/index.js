const { display } = require("./src/ui");
const { initialState, step } = require("./src/snake");
require("./src/input");

let count = 0;

let mutableUglyState = initialState;

setInterval(() => {
  display(15, 15, mutableUglyState);
  mutableUglyState = step(mutableUglyState);
  count++;
  console.log(count);
}, 200);
