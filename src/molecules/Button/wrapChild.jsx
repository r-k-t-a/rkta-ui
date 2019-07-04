import React, { cloneElement, isValidElement } from 'react';
import Atom from '../../atoms/Atom';

export default busy => child => {
  const css = busy
    ? { visibility: 'hidden' }
    : {
        pointerEvents: 'none',
        position: 'relative',
        zIndex: 1,
      };
  return isValidElement(child) ? (
    cloneElement(child, { css: { ...child.props.css, ...css } })
  ) : (
    <Atom element="span" css={css}>
      {child}
    </Atom>
  );
};
