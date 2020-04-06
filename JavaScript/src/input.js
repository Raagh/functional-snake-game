const readline = require("readline");
const { direction, addMove } = require("./snake.js");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") process.exit();
  switch (key.name.toUpperCase()) {
    case "W":
    case "K":
    case "UP":
      addMove(direction.NORTH);
      break;
    case "A":
    case "H":
    case "LEFT":
      addMove(direction.WEST);
      break;
    case "S":
    case "J":
    case "DOWN":
      addMove(direction.SOUTH);
      break;
    case "D":
    case "L":
    case "RIGHT":
      addMove(direction.EAST);
      break;
  }
});
