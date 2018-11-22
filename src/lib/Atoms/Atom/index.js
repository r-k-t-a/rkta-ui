import { createElement } from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  element,
  inlineStyles,
  style,
  theme,
  toggleTheme,
  uiRef,
  ...rest
}) => createElement(element, { ...rest, ref: uiRef, style: inlineStyles });

Atom.defaultProps = { element: 'div' };

export default styled(Atom, ({ style }) => style);
