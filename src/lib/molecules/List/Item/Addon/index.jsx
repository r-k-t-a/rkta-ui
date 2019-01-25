import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../../../atoms/Atom';
import withStyle from '../../../../Theme/withStyle';

const ListItemAddon = ({ children, ...props }) => (
  <Atom element="span" {...props}>
    {children}
  </Atom>
);

ListItemAddon.displayName = 'ListItemAddon';
ListItemAddon.propTypes = {
  children: PropTypes.node.isRequired,
};
ListItemAddon.defaultProps = {};

export default withStyle(ListItemAddon);
