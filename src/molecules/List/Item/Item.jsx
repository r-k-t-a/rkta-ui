import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../atoms/Paper';
import withStyle from '../../../Theme/withStyle';

import Body from './Body';

const ListItem = ({
  BaseElement,
  center,
  children,
  element,
  reverse,
  role,
  small,
  style,
  ...props
}) => (
  <BaseElement
    hard
    element={element}
    role={role}
    style={style}
    {...props}
  >
    {/* {children} */}
    {Children.count(children) === 1
      ? (
        <Body
          center={center}
          reverse={reverse}
          small={small}
          {...props}
        >
          {children}
        </Body>
      )
      : children
    }
  </BaseElement>
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  BaseElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  children: PropTypes.node.isRequired,
  role: PropTypes.string,
};
ListItem.defaultProps = {
  BaseElement: Paper,
  role: 'listitem',
};

export default withStyle(ListItem);
