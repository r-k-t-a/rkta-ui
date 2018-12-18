import React from 'react';
import PropTypes from 'prop-types';
import getColor from '../../util/getColor';

import Atom from '../Atom';
import { withStyle } from '../../Theme';

const getFontProps = (color, { colors }, rest) => {
  const nextColor = getColor(colors, color);
  if (!nextColor) return rest;
  const nextStyle = { ...rest.style, color: nextColor };
  return { ...rest, style: nextStyle };
};

const Font = ({ children, color, theme, ...rest }) => (
  <Atom element="span" {...getFontProps(color, theme, rest)}>
    {children}
  </Atom>
);

Font.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Font.defaultProps = {
  color: '',
};

export default withStyle(Font);
