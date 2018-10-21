export default (colors, predicate) => Object.keys(colors).reduce(
  predicate,
  {},
);
