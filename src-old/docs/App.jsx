import React, { Component, Fragment, createRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Divider, Bage, Paper } from '../../lib';

import BageView from './views/Bage';
import DividerView from './views/Divider';
import FontView from './views/Font';
import HeaderView from './views/Header';
import InputView from './views/Input';
import ListView from './views/List';
import PaperView from './views/Paper';

import SpinnerView from './views/Spinner';
import ButtonView from './views/Button';

const HashRoute = ({ component: View, path, ...routeProps }) => (
  <Route
    {...routeProps}
    component={({ location: { hash }, ...props }) => hash === path && <View {...props} />}
  />
);

const MenuButton = props => <Bage {...props} activeProps={{ primary: true }} />;

class App extends Component {
  ref = createRef();
  render = () => (
    <Router>
      <Fragment>
        <nav>
          <MenuButton to="#Bage">
            Bage
          </MenuButton>
          <MenuButton to="#Divider">
            Divider
          </MenuButton>
          <MenuButton to="#Font">
            Font
          </MenuButton>
          <MenuButton to="#Header">
            Header
          </MenuButton>
          <MenuButton to="#Input">
            Input
          </MenuButton>
          <MenuButton to="#List">
            List
          </MenuButton>
          <MenuButton to="#Paper">
            Paper
          </MenuButton>

          <MenuButton to="#Button">
            Button
          </MenuButton>
          <MenuButton to="#Spinner">
            Spinner
          </MenuButton>
        </nav>
        <Divider />
        <Paper paper1 style={{ padding: '40px' }}>
          <HashRoute path="#Bage" component={BageView} />
          <HashRoute path="#Divider" component={DividerView} />
          <HashRoute path="#Font" component={FontView} />
          <HashRoute path="#Header" component={HeaderView} />
          <HashRoute path="#Input" component={InputView} />
          <HashRoute path="#List" component={ListView} />
          <HashRoute path="#Paper" component={PaperView} />

          <HashRoute path="#Button" component={ButtonView} />
          <HashRoute path="#Spinner" component={SpinnerView} />
        </Paper>
      </Fragment>
    </Router>
  );
}

export default App;
