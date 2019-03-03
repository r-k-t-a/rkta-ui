import React from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  css,
  element: Element,
  getColor,
  location,
  theme,
  changeTheme,
  uiRef,
  ...rest
}) => <Element {...rest} ref={uiRef} />;

Atom.defaultProps = { element: 'div' };

const Styled = styled(Atom, ({ css }) => css);
Styled.displayName = 'Atom';

export default Styled;
