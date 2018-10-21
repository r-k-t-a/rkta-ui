import React from 'react';

import Paper from '../Paper';
import { withStyle } from '../../Theme';

const Bage = props => <Paper round overline primary {...props} />;

export default withStyle(Bage);
