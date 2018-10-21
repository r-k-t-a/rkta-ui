import React, { Component, createRef } from 'react';

import Typography from './Typography';

class App extends Component {
  ref = createRef();
  componentDidMount() {
    console.log('Divider', this.ref.current);
  }
  render = () => <Typography uiRef={this.ref} />;
}

export default App;
