import React from 'react';

import Context from './Context';
import defaultRenderrer from './defaultRenderrer';

const modifyStyles = (theme, { children, ...props }, element) => {
  const { defaultStyle, ...styles } = theme[element];
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
  return { ...nextProps, children, theme, style };
};

const pickProps = (theme, changeTheme, props, elementName) => {
  if (elementName in theme) return modifyStyles(theme, props, elementName);
  return { ...props, theme, changeTheme };
};

const withStyle = (Element, key) => {
  const elementName = Element.displayName || Element.name;
  const WithStyle = props => (
    <Context.Consumer>
      {({ modifyElement, theme, changeTheme }) => {
        const render = modifyElement || defaultRenderrer;
        return render(Element, pickProps(theme, changeTheme, props, key || elementName));
      }}
    </Context.Consumer>
  );
  WithStyle.displayName = `WithStyle: ${elementName}`;
  return WithStyle;
};

export default withStyle;
