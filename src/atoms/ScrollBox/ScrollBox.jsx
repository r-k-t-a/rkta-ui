import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import media from '../../util/media';

const getBoxCss = (css, x, y, interactive, needScroll) => {
  const scroll = interactive ? needScroll : true;
  return media({
    ...css,
    overflow: 'hidden',
    overflowY: y && scroll ? 'scroll' : undefined,
    overflowX: x && scroll ? 'scroll' : undefined,
    overflowScrolling: 'touch',
    position: 'relative',
    scrollBehavior: 'smooth',
    scrollSnapType: 'both mandatory',
    WebkitOverflowScrolling: 'touch',
  });
};

const ScrollBox = ({ css, x, y, interactive, ...rest }) => {
  const [needScroll, setNeedScroll] = useState(false);
  const handleStart = () => !needScroll && setNeedScroll(true);
  const handleEnd = () => needScroll && setNeedScroll(false);
  return (
    <Atom
      {...rest}
      css={getBoxCss(css, x, y, interactive, needScroll)}
      onMouseOver={handleStart}
      onFocus={handleStart}
      onTouchStart={handleStart}
      onScroll={handleStart}
      onMouseLeave={handleEnd}
      onBlur={handleEnd}
      onTouchEnd={handleEnd}
    />
  );
};

ScrollBox.displayName = 'ScrollBox';
ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.shape(),
  interactive: PropTypes.bool,
  x: PropTypes.bool,
  y: PropTypes.bool,
};
ScrollBox.defaultProps = {
  css: null,
  interactive: false,
  x: false,
  y: false,
};

export default ScrollBox;
