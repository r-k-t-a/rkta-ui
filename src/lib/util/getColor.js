export default (colors, color) => (
  typeof color === 'number'
    ? colors.extra[color]
    : colors[color]
);
