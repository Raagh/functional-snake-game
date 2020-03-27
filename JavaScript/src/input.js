const readline = require("readline");
const Snake = require("./snake.js");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") process.exit();
  switch (key.name.toUpperCase()) {
    case "W":
    case "K":
    case "UP":
      Snake.addMove(Snake.direction.NORTH);
      break;
    case "A":
    case "H":
    case "LEFT":
      Snake.addMove(Snake.direction.WEST);
      break;
    case "S":
    case "J":
    case "DOWN":
      Snake.addMove(Snake.direction.SOUTH);
      break;
    case "D":
    case "L":
    case "RIGHT":
      Snake.addMove(Snake.direction.EAST);
      break;
  }
});
