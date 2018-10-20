import { createElement } from 'react';
import { styled } from 'styletron-react';

const Atom = ({
  element,
  style,
  theme,
  toggleTheme,
  ...rest
}) => createElement(element, rest);
Atom.defaultProps = { element: 'div' };

export default styled(Atom, ({ style }) => style);
