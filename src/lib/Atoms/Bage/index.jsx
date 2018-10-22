import React from 'react';

import Paper from '../Paper';
import { withStyle } from '../../Theme';

const Bage = props => <Paper round overline primary nowrap {...props} />;

export default withStyle(Bage);
