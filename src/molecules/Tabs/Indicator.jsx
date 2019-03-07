import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Paper from '../../atoms/Paper';

const TabsIndicator = ({ activeTab, color, height, domNode }) => {
  const tabNode = get(domNode, ['childNodes', activeTab]);

  if (!tabNode) return null;
  const { offsetLeft, offsetWidth } = tabNode;
  const css = {
    backgroundColor: color,
    bottom: 0,
    height: `${height}px`,
    left: 0,
    position: 'absolute',
    transform: `translateX(${offsetLeft}px)`,
    transition: 'transform 0.24s ease, width 0.24s ease',
    width: `${offsetWidth}px`,
    willChange: 'transform, width',
  };
  return <Paper css={css} />;
};

TabsIndicator.propTypes = {
  activeTab: PropTypes.number.isRequired,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number.isRequired,
  domNode: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
TabsIndicator.defaultProps = {
  color: undefined,
  domNode: null,
};

export default TabsIndicator;
