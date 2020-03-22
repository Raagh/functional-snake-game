const UI = require("./src/ui");
const Snake = require("./src/snake");

setInterval(() => {
  UI.display(15, 15, Snake.initialState);
}, 1000);
