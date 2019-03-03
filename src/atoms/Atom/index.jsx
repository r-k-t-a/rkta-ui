import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

const Atom = ({
  css,
  element: Element,
  getColor,
  location,
  theme,
  changeTheme,
  atomRef,
  ...rest
}) => <Element {...rest} ref={atomRef} />;

Atom.propTypes = {
  atomRef: PropTypes.func,
  css: PropTypes.shape({}),
  element: PropTypes.element,
};

Atom.defaultProps = {
  atomRef: null,
  css: null,
  element: 'div',
};

export const RawAtom = Atom;

const Styled = styled(Atom, ({ css }) => css);
Styled.displayName = 'Atom';

export default Styled;
