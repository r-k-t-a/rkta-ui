import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import { withStyle } from '../../Theme';

const getFontProps = (color, { colors }, rest) => {
  const nextColor = typeof color === 'number' ? colors.secondary[color] : colors[color];
  if (!nextColor) return rest;
  const nextStyle = { ...rest.style, color: nextColor };
  return { ...rest, style: nextStyle };
};

const Font = ({ children, color, theme, ...rest }) => (
  <Atom element="font" {...getFontProps(color, theme, rest)}>
    {children}
  </Atom>
);

Font.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Font.

export default withStyle(Font, 'font');
