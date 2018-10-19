import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";

import { Atom, Provider, withTheme } from "../../lib";

const App = props => (
  <Atom style={{ color: 'navy', padding: '60px' }}>
    Modern React component module
  </Atom>
);

export default withTheme(App);
