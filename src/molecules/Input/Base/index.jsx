import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import ListItemBody from '../../List/Item/Body';
import Font from '../../../atoms/Font';
import withStyle from '../../../Theme/withStyle';

const InputBase = ({
  color,
  css,
  hasFocus,
  label,
  labelIsActive,
  outlined,
  placeholder,
  setLabelWidth,
  value,
  ...rest
}) => (
  <ListItemBody fitTop fitBottom>
    <Font
      {...rest}
      element="input"
      css={css}
      placeholder={label ? undefined : placeholder}
      value={value}
    />
    {label && (
      <Label
        active={labelIsActive}
        color={color}
        height={css.height}
        label={label}
        outlined={outlined}
        setLabelWidth={setLabelWidth}
      />
    )}
  </ListItemBody>
);

InputBase.propTypes = {
  labelIsActive: PropTypes.bool.isRequired,
  value: PropTypes.node.isRequired,
};
InputBase.displayName = 'InputBase';

export default withStyle(InputBase);
