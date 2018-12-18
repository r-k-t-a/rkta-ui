import React from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  element: Element,
  inlineStyles,
  style,
  theme,
  changeTheme,
  uiRef,
  ...rest
}) => <Element {...rest} ref={uiRef} style={inlineStyles} />;

Atom.defaultProps = { element: 'div' };

export default styled(Atom, ({ style }) => style);
