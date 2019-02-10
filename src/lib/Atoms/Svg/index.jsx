import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Svg = ({ children, color, css, getColor, size, ...rest }) => (
  <Atom
    {...rest}
    element="svg"
    style={{
      fill: color ? getColor(color) : 'currentColor',
      height: `${size}px`,
      width: `${size}px`,
      ...css,
    }}
    viewBox="0 0 20 20"
  >
    {children}
  </Atom>
);

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node,
  getColor: PropTypes.func.isRequired,
  size: PropTypes.number,
  style: PropTypes.shape().isRequired,
};
Svg.defaultProps = {
  color: null,
  size: 24,
};
Svg.displayName = 'Svg';

export default withStyle(Svg);
