const point = (x, y) => {
  return {
    x: x,
    y: y
  };
};

const initialState = {
  snake: [point(2, 2)],
  apple: point(5, 5),
  moves: []
};

module.exports = { initialState };
