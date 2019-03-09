import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import withStyle from '../../Theme/withStyle';
import { getSegmentStyle } from './style';

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
