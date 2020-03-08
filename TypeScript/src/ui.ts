import { Point, State } from "./snake";
import { map, rep, set, pipe, functionify, id, length } from "./core";

const toString = (xsxs: string[][]) =>
  map(xs => xs.join(" "))(xsxs).join("\r\n");

const drawMap = (borders: Point): string[][] =>
  map(element => rep(element)(borders[1]))(rep(".")(borders[0]));

const drawApple = ({ apple }: { apple: Point }) => set("O")(apple);
const drawSnake = ({ snake }: { snake: Point[] }) =>
  pipe(...map(set("X"))(snake));
const drawCrash = ({ snake }: { snake: Point[] }) =>
  length(snake) === 0 ? map(map(functionify("#"))) : id;

const drawToConsole = (array: any[]) => console.log("\x1Bc" + toString(array));

export const show = (borders: Point) => (state: State) =>
  drawToConsole(
    pipe(drawApple(state), drawSnake(state), drawCrash(state))(drawMap(borders))
  );
