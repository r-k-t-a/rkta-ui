import React, { forwardRef } from 'react';

import Context from './Context';
import defaultRenderrer from './defaultRenderrer';
import invariant from '../util/invariant';

const modifyStyles = (context, { children, ...props }, element, ref) => {
  const { defaultStyle, ...styles } = context.theme[element];
  const { nextStyle, nextProps } = Object.keys(props).reduce(
    (acc, key) => {
      if (props[key] === true && key in styles) Object.assign(acc.nextStyle, styles[key]);
      else Object.assign(acc.nextProps, { [key]: props[key] });
      return acc;
    },
    {
      nextProps: {},
      nextStyle: { ...defaultStyle },
    },
  );
  const style = { ...nextStyle, ...props.style };
  return { ...nextProps, ...context, children, style, ref };
};

const pickProps = (context, props, elementName, ref) => {
  if (elementName in context.theme) return modifyStyles(context, props, elementName, ref);
  return { ...props, ...context, ref };
};

const withStyle = (Element, key) => {
  const { displayName } = Element;
  const WithStyle = forwardRef((props, ref) => (
    <Context.Consumer>
      {({ modifyElement, providerIsMissing, ...context }) => {
        invariant(!providerIsMissing, 'Please use the Provider');
        const render = modifyElement || defaultRenderrer;
        return render(Element, pickProps(context, props, key || displayName, ref));
      }}
    </Context.Consumer>
  ));
  WithStyle.contextType = Context;
  WithStyle.displayName = displayName;
  Element.displayName = `Styled ${displayName}`; // eslint-disable-line no-param-reassign
  return WithStyle;
};

export default withStyle;
