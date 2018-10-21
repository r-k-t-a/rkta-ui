import React, { Component, createRef } from 'react';

import Bage from './Bage';

class App extends Component {
  ref = createRef();
  componentDidMount() {
    console.log('Divider', this.ref.current);
  }
  render = () => <Bage />;
}

export default App;
