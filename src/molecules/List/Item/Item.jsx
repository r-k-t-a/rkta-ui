import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../atoms/Paper';
import withStyle from '../../../Theme/withStyle';

import Body from './Body';

const ListItem = ({
  autoHeight,
  BaseElement,
  blockLevel,
  center,
  children,
  css,
  element,
  href,
  reverse,
  small,
  textLeft,
  ...props
}) => (
  <BaseElement
    autoHeight={autoHeight}
    blockLevel={blockLevel}
    css={css}
    hard
    href={href}
    element={element}
    textLeft={textLeft}
    {...props}
  >
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
  autoHeight: PropTypes.bool,
  BaseElement: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.shape({ render: PropTypes.func.isRequired }),
  ]),
  blockLevel: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  css: PropTypes.shape().isRequired,
  href: PropTypes.string,
  element: PropTypes.string,
  reverse: PropTypes.bool,
  small: PropTypes.bool,
  textLeft: PropTypes.bool,
};
ListItem.defaultProps = {
  autoHeight: undefined,
  BaseElement: Paper,
  blockLevel: undefined,
  center: false,
  element: undefined,
  href: null,
  reverse: false,
  small: false,
  textLeft: undefined,
};

export default withStyle(ListItem);
