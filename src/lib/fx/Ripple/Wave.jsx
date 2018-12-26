import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../../atoms/Paper';

const defaultStyle = {
  animationName: {
    from: { transform: 'scale(0, 0)' },
    to: { transform: 'scale(1, 1)' },
  },
  animationDuration: '1.8s',
  animationFillMode: 'forwards',
  animationIterationCount: '1',
  animationTimingFunction: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
  display: 'block',
  opacity: 0.24,
  position: 'absolute',
  transition: 'opacity 0.4s ease',
};

const getStyle = (released, style) => {
  if (released) return { ...defaultStyle, ...style, opacity: 0 };
  return { ...defaultStyle, ...style };
};

const Wave = ({ onDissolve, released, size, style }) => (
  <Paper
    element="span"
    style={getStyle(released, style)}
    primary
    size={size}
    onTransitionEnd={onDissolve}
    round
  />
);

Wave.propTypes = {
  onDissolve: PropTypes.func,
  released: PropTypes.bool,
  size: PropTypes.number.isRequired,
  style: PropTypes.shape().isRequired,
};
Wave.defaultProps = {
  onDissolve: undefined,
  released: false,
};

export default Wave;
