import React from 'react';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Divider = ({ children, ...rest }) => <Atom element="hr" {...rest} />;
Divider.displayName = 'Divider';

export default withStyle(Divider);
