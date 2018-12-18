import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import Paper from '../../atoms/Paper';

import Spinner from '../Spinner';

import { withStyle } from '../../Theme';


const Button = ({
  busy,
  children,
  element,
  spinnerProps,
  style,
  ...rest
}) => (
  <Paper element={element} style={style} {...rest}>
    <Atom
      element="span"
      style={busy ? { visibility: 'hidden' } : undefined}
    >
      {children}
    </Atom>
    {busy && <Spinner blockLevel {...spinnerProps} />}
  </Paper>
);

Button.propTypes = {
  busy: PropTypes.bool,
  children: PropTypes.node,
  element: PropTypes.node,
  spinnerProps: PropTypes.shape(),
  style: PropTypes.shape().isRequired,
};

Button.defaultProps = {
  busy: false,
  children: null,
  element: 'button',
  spinnerProps: null,
};

export default withStyle(Button);
