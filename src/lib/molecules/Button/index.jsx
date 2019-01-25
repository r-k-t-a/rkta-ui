import React from 'react';
import PropTypes from 'prop-types';


import ButtonBase from '../ButtonBase';
import withStyle from '../../Theme/withStyle';

const Button = ({ children, ...rest }) => (
  <ButtonBase {...rest}>
    {children}
  </ButtonBase>
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
};
Button.defaultProps = {
  children: null,
};

export default withStyle(Button);
