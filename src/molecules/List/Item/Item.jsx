import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../atoms/Paper';
import withStyle from '../../../Theme/withStyle';

import Body from './Body';

const ListItem = ({ BaseElement, center, children, element, reverse, role, small, ...props }) => (
  <BaseElement hard element={element} role={role} {...props}>
    {Children.count(children) === 1 ? (
      <Body center={center} reverse={reverse} small={small} {...props}>
        {children}
      </Body>
    ) : (
      children
    )}
  </BaseElement>
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  BaseElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  reverse: PropTypes.bool,
  role: PropTypes.string,
  small: PropTypes.bool,
};
ListItem.defaultProps = {
  BaseElement: Paper,
  center: false,
  element: undefined,
  reverse: false,
  role: 'listitem',
  small: false,
};

export default withStyle(ListItem);
