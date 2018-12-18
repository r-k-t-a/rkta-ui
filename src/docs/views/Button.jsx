import React, { Fragment } from 'react';

import { Button, Header, Paper, Divider } from '../../lib';

const buttonStyle = { margin: '8px' };
const paperStyle = { padding: '40px' };

const ButtonView = () => (
  <Fragment>
    <Header level="1">
      Button
    </Header>
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Normal
      </Header>
      <Divider />
      <Button rize={1} uppercase style={buttonStyle} small>
        Button 1
      </Button>
      <Button rize={1} style={buttonStyle} primary>
        Button 2
      </Button>
      <Button rize={1} style={buttonStyle} secondary large color="paper">
        Button 3
      </Button>
    </Paper>
    <Divider />
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Busy
      </Header>
      <Divider />
      <Button
        rize={1}
        spinnerProps={{ size: '16px' }}
        style={buttonStyle}
        small
        busy
        uppercase
      >
        Button 1
      </Button>
      <Button rize={1} style={buttonStyle} primary busy>
        Button 2
      </Button>
      <Button
        rize={1}
        style={buttonStyle}
        secondary
        color="paper"
        large
        busy
      >
        Button 3
      </Button>
    </Paper>
    <Divider invisible />
  </Fragment>
);

export default ButtonView;
