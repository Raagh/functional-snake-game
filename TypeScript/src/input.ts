import * as readline from "readline";
import { Direction } from "./snake";

enum Keys {
  W = "W",
  A = "A",
  S = "S",
  D = "D"
}

export const catchKeyboardInput = () => {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") process.exit();
    switch (key.name.toUpperCase()) {
      case Keys.W:
        return Direction.North;
      case Keys.A:
        return Direction.West;
      case Keys.S:
        return Direction.South;
      case Keys.D:
        return Direction.East;
    }
  });
};
