import React, { Fragment } from 'react';

import {
  Divider,
  Header,
  Font,
  List,
  Addon,
  Input,
  Paper,
} from '../../../lib';

import Archive from '../../../lib/entypo/Archive';
import Cake from '../../../lib/entypo/Cake';
import Wallet from '../../../lib/entypo/Wallet';

const listStyle = { margin: 'auto', maxWidth: '320px' };
const paperStyle = { padding: '40px' };


const Typography = () => (
  <Fragment>
    <Header level={1}>
      Input
    </Header>
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Normal
      </Header>
      <Divider />
      <Input
        append={(
          <Addon>
            <Archive />
          </Addon>
        )}
        defaultValue="test input"
      />
    </Paper>
  </Fragment>
);

export default Typography;
