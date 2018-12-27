import React from 'react';

import Paper from '../Paper';
import withStyle from '../../Theme/withStyle';

const List = props => <Paper role="list" {...props} />;

List.displayName = 'List';

export default withStyle(List);
