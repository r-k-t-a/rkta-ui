import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../../../Paper';
import withStyle from '../../../../Theme/withStyle';

const ListItemBody = ({ children, ...rest }) => (
  <Paper hard transparent {...rest}>
    {children}
  </Paper>
);

ListItemBody.displayName = 'ListItemBody';
ListItemBody.propTypes = {
  element: PropTypes.node,
};
ListItemBody.defaultProps = {};

export default withStyle(ListItemBody);
