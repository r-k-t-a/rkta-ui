import React from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import withStyle from '../../Theme/withStyle';

const getFontProps = (level, rest) => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}`;
    return { element, [element]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

const Header = ({ children, level, ...rest }) => (
  <Font {...getFontProps(level, rest)}>
    {children}
  </Font>
);

Header.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
};

Header.defaultProps = {
  children: null,
  level: 1,
};

export default withStyle(Header);
