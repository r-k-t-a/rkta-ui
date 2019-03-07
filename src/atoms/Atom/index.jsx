import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styletron-react';

const Atom = ({
  css,
  element: Element,
  getColor, // eslint-disable-line react/prop-types
  location, // eslint-disable-line react/prop-types
  theme, // eslint-disable-line react/prop-types
  changeTheme, // eslint-disable-line react/prop-types
  atomRef,
  ...rest
}) => <Element {...rest} ref={atomRef} />;

Atom.propTypes = {
  atomRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  css: PropTypes.shape({}),
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
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
