import React from "react";
import { render } from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";


import App from './App';

import { Provider } from "../../lib";

const engine = new Styletron();

render(
  (
    <Provider debugMode value={engine} theme={{ a: 'b' }} toggleTheme={console.log}>
      <App />
    </Provider>
  ),
  document.getElementById("app"),
);
