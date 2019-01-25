import React from 'react';
import { render } from 'react-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { NavLink } from 'react-router-dom';

import { Provider } from '../../lib/Theme';
import App from './App';
// import Tmp from './tmp';

const engine = new Styletron();
const customTheme = {
  customTheme: 'customTheme',
};

const modifyElement = (Component, { activeProps, href, to, ...rest }) => {
  if (href) return <Component {...rest} element="a" href={href} />;
  if (to) {
    const conditionalProps = to === window.location.hash ? activeProps : {};
    return <Component {...rest} {...conditionalProps} element={NavLink} to={to} />;
  }
  return <Component {...rest} />;
};

render(
  (
    <Provider
      debugMode
      modifyElement={modifyElement}
      theme={customTheme}
      value={engine}
    >
      {/* <Tmp /> */}
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
