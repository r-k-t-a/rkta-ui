import React from 'react';
import { Provider } from 'styletron-react';
import Context from './Context';

export default ({ children, theme, toggleTheme, ...rest }) => (
  <Provider {...rest}>
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  </Provider>
);
