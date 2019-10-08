import React, { forwardRef } from 'react';

import Button from '../../Button';
import { ListItem } from '../Item';

const ListButton = forwardRef((props, ref) => (
  <ListItem autoHeight BaseElement={Button} blockLevel textLeft atomRef={ref} {...props} />
));

ListButton.displayName = 'ListButton';

export default ListButton;
