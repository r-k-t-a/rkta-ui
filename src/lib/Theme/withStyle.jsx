import React from 'react';
import merge from 'lodash.merge';

import Context from './Context';
import defaultTheme from './defaultTheme';

const modifyStyles = (theme, { children, ...props }, element) => {
  const { defaultStyle, ...styles } = theme[element];
  const { nextStyle, nextProps } = Object.keys(props).reduce(
    (acc, key) => {
      if (key in styles) Object.assign(acc.nextStyle, styles[key]);
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

const pickProps = (contextTheme, props, element) => {
  const theme = merge(defaultTheme, contextTheme);
  if (element in theme) return modifyStyles(theme, props, element);
  return { ...props, theme };
};

const withStyle = (Element, key) => {
  const elementName = Element.displayName || Element.name;
  const WithStyle = props => (
    <Context.Consumer>
      {({ theme, toggleTheme }) => (
        <Element {...pickProps(theme, props, key || elementName)} toggleTheme={toggleTheme} />
      )}
    </Context.Consumer>
  );
  WithStyle.displayName = `WithStyle: ${elementName}`;
  return WithStyle;
};

export default withStyle;
