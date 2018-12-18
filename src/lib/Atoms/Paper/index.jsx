import React from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import { withStyle } from '../../Theme';

const modifyProps = ({ rize, size, style, theme, ...props }) => {
  const nextStyle = {};
  if (rize) {
    const blur = Math.max(rize ** 3, 5);
    Object.assign(
      nextStyle,
      {
        boxShadow: `
          0px ${rize}px ${blur}px 0px rgba(0, 0, 0, 0.2),
          0px ${rize * 2}px ${blur / 2}px 0px rgba(0, 0, 0, 0.14),
          0px ${rize * 3}px ${blur / rize}1px ${-rize / 2}px rgba(0, 0, 0, 0.12)
        `,
      },
    );
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
