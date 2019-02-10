import React, { Fragment } from 'react';

import { Paper, Header } from '../../../lib';

const PaperView = () => (
  <Fragment>
    <Header level={1}>
      Paper
    </Header>
    <Paper rize={1}>
      Paper is basic block for making other components.
      <br />
      By default paper is white and has rounded corners
    </Paper>
  </Fragment>
);

export default PaperView;
