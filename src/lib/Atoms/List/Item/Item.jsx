import React, { Children } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../Atom';
import withStyle from '../../../Theme/withStyle';

import Body from './Body';

const ListItem = ({ children, ...props }) => {
  if (Children.count(children) === 1) {
    return (
      <Atom role="listitem" {...props}>
        <Body>
          {children}
        </Body>
      </Atom>
    );
  }
  return (
    <Atom role="listitem" {...props}>
      {children}
    </Atom>
  );
};

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyle(ListItem);
