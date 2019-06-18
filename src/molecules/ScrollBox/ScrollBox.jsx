import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import media from '../../util/media';

import DefaultIndicator from './Indicator';
import useIndicators from './useIndicators';

const getBoxCss = (vertical, css) =>
  media({
    ...css,
    overflow: 'hidden',
    overflowY: vertical ? 'scroll' : undefined,
    overflowX: vertical ? undefined : 'scroll',
    overflowScrolling: 'touch',
    position: 'relative',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
  });

const ScrollBox = ({ children, css, Indicator, vertical, ...rest }) => {
  const [ref, setRef] = useState();
  const [prev, next] = useIndicators(ref, vertical);
  return (
    <Fragment>
      <Atom {...rest} css={getBoxCss(vertical, css)} atomRef={setRef}>
        {children}
      </Atom>
      {prev && <Indicator {...prev} />}
      {next && <Indicator {...next} />}
    </Fragment>
  );
};

ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
  Indicator: PropTypes.elementType,
  vertical: PropTypes.bool,
  css: PropTypes.shape(),
};
ScrollBox.defaultProps = {
  css: null,
  Indicator: DefaultIndicator,
  vertical: false,
};

export default ScrollBox;
