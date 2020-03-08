export const range = (start: number) => (end: number) =>
  new Array(end - start).fill(null).map((_, i) => start + i);
export const length = xs => xs.length;
export const map = (f: (x: any) => any) => (xs: any[]): any[] => xs.map(f);
export const mapi = f => xs => xs.map((x, i) => f(x)(i));
export const rep = element => repLength =>
  map(functionify(element))(range(0)(repLength));
export const functionify = x => y => x;
export const id = x => x;
export const adjust = n => f => xs => mapi(x => i => (i === n ? f(x) : x))(xs);
export const set = val => pos =>
  adjust(pos[0])(adjust(pos[1])(functionify(val)));
export const pipe = (...fns) => x => [...fns].reduce((acc, f) => f(acc), x);
