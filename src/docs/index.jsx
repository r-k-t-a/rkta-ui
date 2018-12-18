import React from 'react';
import { render } from 'react-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { NavLink } from 'react-router-dom';

import App from './App';
import { Provider } from '../../lib';

const engine = new Styletron();
const customTheme = {};

const modifyElement = (Component, { activeProps, href, to, ...rest }) => {
  if (href) return <Component {...rest} element="a" href={href} />;
  if (to) {
    // normally you use router.matchPath here
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
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
