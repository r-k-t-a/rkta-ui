import React from 'react';
import merge from 'lodash.merge';

import Context from './Context';
import defaultTheme from './defaultTheme';

const getStyles = (theme, { children, ...props }, element) => {
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
  if (element in theme) return getStyles(theme, props, element);
  return Object.assign({}, props, { theme });
};

const withStyle = (Element, key) => {
  const WithStyle = props => (
    <Context.Consumer>
      {({ theme, toggleTheme }) => (
        <Element
          {...pickProps(theme, props, key)}
          toggleTheme={toggleTheme}
        />
      )}
    </Context.Consumer>
  );
  WithStyle.displayName = `WithStyle: ${Element.displayName || Element.name}`;
  return WithStyle;
};

export default withStyle;
