import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';

import Paper from '../../atoms/Paper';

const wave = keyframes`
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
`;

const defaultCss = {
  animation: `${wave} 1.8s cubic-bezier(0.075, 0.820, 0.165, 1.000) forwards 1`,
  display: 'block',
  opacity: 0.24,
  position: 'absolute',
  transition: 'opacity 0.4s ease',
};

const getStyle = (released, css) => {
  if (released) return { ...defaultCss, ...css, opacity: 0 };
  return { ...defaultCss, ...css };
};

const Wave = ({ css, onDissolve, released, size }) => (
  <Paper
    element="span"
    css={getStyle(released, css)}
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
  css: PropTypes.shape().isRequired,
};
Wave.defaultProps = {
  onDissolve: undefined,
  released: false,
};

export default Wave;
