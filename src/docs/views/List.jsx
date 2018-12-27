import React, { Fragment } from 'react';

import {
  Divider,
  Header,
  Font,
  List,
  ListItemAddon,
  ListItemBody,
  ListItem,
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
      List
    </Header>
    <Paper paper2 style={paperStyle}>
      <Header h6>
        Normal
      </Header>
      <Divider />
      <List rize={1} style={listStyle}>
        <ListItem>
          <ListItemAddon>
            <Wallet />
          </ListItemAddon>
          <ListItemBody>
            Item 1
          </ListItemBody>
        </ListItem>
        <Divider inset dotted />
        <ListItem>
          <ListItemAddon>
            <Archive />
          </ListItemAddon>
          <ListItemBody>
            Item 2
            <Font caption element="div">
              Description
            </Font>
          </ListItemBody>
          <ListItemAddon>
            <Cake />
          </ListItemAddon>
        </ListItem>
      </List>
    </Paper>
  </Fragment>
);

export default Typography;
