const UI = require("./src/ui");
const Snake = require("./src/snake");
const Input = require("./src/input");

let count = 0;

const state = Snake.state;

setInterval(() => {
  UI.display(15, 15, state);
  Snake.step();
  count++;
  console.log(count);
}, 200);
