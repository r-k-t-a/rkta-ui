import React from 'react';

import ButtonBase from '../../ButtonBase';
import { ListItem } from '../Item';

const ListButton = props => (
  <ListItem
    autoHeight
    BaseElement={ButtonBase}
    blockLevel
    fitAll
    textLeft
    {...props}
  />
);

ListButton.displayName = 'ListButton';

export default ListButton;
