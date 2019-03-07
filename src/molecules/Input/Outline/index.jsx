import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../../atoms/Atom';
import Paper from '../../../atoms/Paper';
import withStyle from '../../../Theme/withStyle';

const InputOutline = ({ children, css, labelIsActive, labelWidth, ...rest }) => (
  <Paper {...rest} element="fieldset" css={css}>
    <Atom
      element="legend"
      css={{
        position: 'relative',
        zIndex: 2,
        marginLeft: '10px',
        padding: 0,
        height: '1px',
        // transform: `scaleX(${labelIsActive ? 1 : 0})`,
        transform: 'scaleX(0)',
        transition: 'width 0.16s ease',
        width: `${labelIsActive ? labelWidth + 8 : 0}px`,
      }}
    />
    {children}
  </Paper>
);

InputOutline.displayName = 'InputOutline';
InputOutline.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.shape().isRequired,
  labelIsActive: PropTypes.bool.isRequired,
  labelWidth: PropTypes.number.isRequired,
};

export default withStyle(InputOutline);
