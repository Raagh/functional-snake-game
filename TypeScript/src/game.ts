import { catchKeyboardInput } from "./input";
import { initialState, step } from "./snake";
import { show } from "./ui";
import { pipe } from "./core";

const mapColumns = 20;
const mapRows = 20;

const start = () => {
  catchKeyboardInput();

  setInterval(() => pipe(step, show([mapColumns, mapRows]))(initialState), 80);
};

start();
