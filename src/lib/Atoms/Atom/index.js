import { createElement } from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  element,
  style,
  theme,
  toggleTheme,
  uiRef,
  ...rest
}) => createElement(element, { ...rest, ref: uiRef });
Atom.defaultProps = { element: 'div' };

export default styled(Atom, ({ style }) => style);
