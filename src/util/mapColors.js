export default (colors, propName, prefix = '') =>
  Object.keys(colors).reduce(
    (acc, key) => ({ ...acc, [`${prefix}${key}`]: { [propName]: colors[key] } }),
    {},
  );
