import React, { Component } from 'react';

import {
  Divider,
  Font,
  Header,
} from '../../lib';

class App extends Component {
  componentDidMount() {}
  render = () => (
    <div>
      <Header level={1} color="special">
        H1: Handgloves
      </Header>
      <Divider dotted />
      <Header level={2}>
        H2: Handgloves
      </Header>
      <Divider dotted />
      <Header level={3}>
        H3: Handgloves
      </Header>
      <Divider dotted />
      <Header level={4}>
        H4: Handgloves
      </Header>
      <Divider dotted />
      <Header level={5}>
        H5: Handgloves
      </Header>
      <Divider dotted />
      <Header level={6}>
        H6: Handgloves
      </Header>
      <Divider dotted />
      <Font element="p" subtitle1>
        Subtitle 1: Handgloves
      </Font>
      <Divider dotted />
      <Font element="p" subtitle2>
        Subtitle 2: Handgloves
      </Font>
      <Divider dotted />
      <Font element="p">
        Default: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Font>
      <Divider dotted />
      <Font element="p" body2>
        Body 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Font>
      <Divider dotted />
      <Font element="p" button>
        Button
      </Font>
      <Divider dotted />
      <Font element="p" button uppercase>
        Button Uppercase
      </Font>
      <Divider dotted />
      <Font element="p" caption>
        Caption: Handgloves
      </Font>
      <Divider dotted />
      <Font element="p" overline>
        Overline: Handgloves
      </Font>
    </div>
  );
}

export default App;
