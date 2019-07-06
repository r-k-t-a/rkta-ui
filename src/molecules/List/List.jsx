import React from 'react';

import Paper from '../../atoms/Paper';
import withStyle from '../../Theme/withStyle';

const List = props => <Paper {...props} />;

List.displayName = 'List';

export default withStyle(List);
