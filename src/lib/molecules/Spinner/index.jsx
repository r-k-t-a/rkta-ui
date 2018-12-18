import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import { withStyle } from '../../Theme';
import getColor from '../../util/getColor';

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

const segmentStyle = {
  animationName,
  animationDuration: '1.6s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)',
  borderColor: 'inherit',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderStyle: 'solid',
  borderRadius: '50%',
  boxSizing: 'border-box',
};

const Spinner = ({
  borderWidth,
  children,
  color,
  style,
  size,
  theme,
}) => (
  <Atom style={style}>
    <Atom
      style={{
        ...segmentStyle,
        borderColor: color && getColor(theme.colors, color),
        borderWidth,
        width: size,
        height: size,
      }}
    />
    {children}
  </Atom>
);

Spinner.propTypes = {
  borderWidth: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  style: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  children: null,
  color: null,
  size: '24px',
};

export default withStyle(Spinner);
