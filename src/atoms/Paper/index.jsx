import React from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import withStyle from '../../Theme/withStyle';

const modifyProps = ({ css, rize, size, theme, ...props }) => {
  const nextCss = {};
  if (rize) {
    const blur = Math.max(rize ** 3, 5);
    Object.assign(nextCss, {
      boxShadow: `
          0px ${rize}px ${blur}px 0px rgba(0, 0, 0, 0.2),
          0px ${rize * 2}px ${blur / 2}px 0px rgba(0, 0, 0, 0.14),
          0px ${rize * 3}px ${blur / rize}1px ${-rize / 2}px rgba(0, 0, 0, 0.12)
        `,
    });
  }
  if (size) {
    const cssSize = `${size}px`;
    Object.assign(nextCss, { width: cssSize, height: cssSize });
  }
  return { element: 'div', ...props, css: { ...nextCss, ...css } };
};

const Paper = props => <Font {...modifyProps(props)} />;

Paper.displayName = 'Paper';
Paper.propTypes = {
  rize: PropTypes.number,
  size: PropTypes.number,
};
Paper.defaultProps = {
  rize: 0,
  size: 0,
};

export default withStyle(Paper);
