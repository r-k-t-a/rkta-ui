import React from 'react';
import PropTypes from 'prop-types';

import { Atom } from '../../atoms';
import media from '../../util/media';

const getBoxCss = (css, x, y) =>
  media({
    ...css,
    overflow: 'hidden',
    overflowY: y ? 'scroll' : undefined,
    overflowX: x ? 'scroll' : undefined,
    overflowScrolling: 'touch',
    position: 'relative',
    scrollBehavior: 'smooth',
    scrollSnapType: 'both mandatory',
    WebkitOverflowScrolling: 'touch',
  });

const ScrollBox = ({ css, x, y, ...rest }) => <Atom {...rest} css={getBoxCss(css, x, y)} />;

ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.shape(),
  x: PropTypes.bool,
  y: PropTypes.bool,
};
ScrollBox.defaultProps = {
  css: null,
  x: false,
  y: false,
};

export default ScrollBox;
