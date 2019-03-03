import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import withStyle from '../../Theme/withStyle';

const animationName = {
  '0%': {
    transform: 'rotate(0)',
    animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  },
  '24%': {
    transform: 'rotate(900deg)',
    animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  '100%': {
    transform: 'rotate(1800deg)',
  },
};

const getSegmentStyle = (borderWidth, size, color) => ({
  animationName,
  borderWidth,
  animationDuration: '1.6s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)',
  borderBottomColor: color,
  borderTopColor: color,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderStyle: 'solid',
  borderRadius: '50%',
  boxSizing: 'border-box',
  width: size,
  height: size,
});

const Spinner = ({ borderWidth, children, color, css, getColor, size }) => (
  <Atom css={css}>
    <Atom css={getSegmentStyle(borderWidth, size, getColor(color))} />
    {children}
  </Atom>
);

Spinner.displayName = 'Spinner';
Spinner.propTypes = {
  borderWidth: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  css: PropTypes.shape().isRequired,
  getColor: PropTypes.func.isRequired,
  size: PropTypes.string,
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  children: null,
  color: null,
  size: '24px',
};

export default withStyle(Spinner);
