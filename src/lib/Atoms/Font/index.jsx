import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const getFontProps = (color, getColor, rest) => {
  const nextStyle = { ...rest.style, color: getColor(color) };
  return { ...rest, style: nextStyle };
};

const Font = ({ children, getColor, color, theme, ...rest }) => (
  <Atom element="span" {...getFontProps(color, getColor, rest)}>
    {children}
  </Atom>
);

Font.displayName = 'Font';
Font.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getColor: PropTypes.func.isRequired,
};
Font.defaultProps = {
  children: null,
  color: '',
};

export default withStyle(Font);
