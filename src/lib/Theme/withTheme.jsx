import React from 'react';

import Context from './Context';
import defaultTheme from './defaultTheme';


const withTheme = Element => props => (
  <Context.Consumer>
    {({ theme, toggleTheme }) => (
      <Element
        {...props}
        theme={{ ...defaultTheme, ...theme }}
        toggleTheme={toggleTheme}
      />
    )}
  </Context.Consumer>
);

export default withTheme;
