import React from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import { withStyle } from '../../Theme';

const modifyProps = ({ rize, size, style, theme, ...props }) => {
  const nextStyle = {};
  if (rize) {
    const x = rize;
    const blur = Math.max(rize ** 3, 4);
    Object.assign(nextStyle, { boxShadow: `0 ${x}px ${blur}px 0 rgba(0,0,0, .48)` });
  }
  if (size) {
    const cssSize = `${size}px`;
    Object.assign(nextStyle, { width: cssSize, height: cssSize });
  }
  return { element: 'div', ...props, style: { ...nextStyle, ...style } };
};

const Paper = props => <Font {...modifyProps(props)} />;

Paper.propTypes = {
  rize: PropTypes.number,
  size: PropTypes.number,
};
Paper.defaultProps = {
  rize: 0,
  size: 0,
};

export default withStyle(Paper);
