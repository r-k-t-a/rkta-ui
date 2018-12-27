import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../Paper';
import withStyle from '../../../../Theme/withStyle';

const ListItemAddon = ({ children, ...props }) => (
  <Paper hard transparent {...props}>
    {children}
  </Paper>
);

ListItemAddon.displayName = 'ListItemAddon';
ListItemAddon.propTypes = {
  children: PropTypes.node.isRequired,
};
ListItemAddon.defaultProps = {};

export default withStyle(ListItemAddon);
