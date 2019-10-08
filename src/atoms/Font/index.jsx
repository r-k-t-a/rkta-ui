import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const getFontProps = (color, getColor, rest) => {
  const nextCss = { ...rest.css, color: getColor(color) };
  return { ...rest, css: nextCss };
};

const Font = forwardRef(({ children, getColor, color, ...rest }, ref) => (
  <Atom element="span" atomRef={ref} {...getFontProps(color, getColor, rest)}>
    {children}
  </Atom>
));

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
