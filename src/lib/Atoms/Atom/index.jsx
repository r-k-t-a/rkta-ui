import React from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  element: Element,
  getColor,
  inlineStyles,
  pathname,
  style,
  theme,
  changeTheme,
  uiRef,
  ...rest
}) => <Element {...rest} ref={uiRef} style={inlineStyles} />;

Atom.defaultProps = { element: 'div' };

const Styled = styled(Atom, ({ style }) => style);
Styled.displayName = 'Atom';

export default Styled;
