import React, { Fragment } from 'react';

import { Button, Header, Paper, Divider } from '../../../lib';

const buttonStyle = { margin: '8px' };
const paperStyle = { padding: '40px' };

const ButtonView = () => (
  <Fragment>
    <Header level={1}>
      Button
    </Header>
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Normal
      </Header>
      <Divider />
      <Button uppercase style={buttonStyle} small>
        Button 1
      </Button>
      <Button style={buttonStyle} primary>
        Button 2
      </Button>
      <Button style={buttonStyle} secondary large color="paper">
        Button 3
      </Button>
    </Paper>
    <Divider />
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Rized
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
        Outlined
      </Header>
      <Divider />
      <Button uppercase style={buttonStyle} small outline rounded>
        Button 1
      </Button>
      <Button style={buttonStyle} primary outline rounded>
        Button 2
      </Button>
      <Button style={buttonStyle} secondary large color="secondary" outline rounded>
        Button 3
      </Button>
    </Paper>
    <Divider />
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Round
      </Header>
      <Divider />
      <Button size={32} style={buttonStyle} small outline round uppercase>
        32
      </Button>
      <Button size={48} style={buttonStyle} primary round>
        48
      </Button>
      <Button size={64} style={buttonStyle} secondary large color="secondary" outline round>
        64
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
