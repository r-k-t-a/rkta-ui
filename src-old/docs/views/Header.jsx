import React, { Fragment } from 'react';

import { Divider, Header } from '../../../lib';

const Typography = () => (
  <Fragment>
    <Header level={1}>
      Header
    </Header>
    <Divider dotted />
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
  </Fragment>
);

export default Typography;
