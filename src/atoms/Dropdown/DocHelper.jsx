import React, { useRef } from 'react';
import Dropdown from '.';
import useControlledDropdown from './useControlledDropdown';
import { Atom, List, ListButton, ListItemBody } from '../..';

const DocHelper = () => {
  const [dropdownProps, dropdownControls] = useControlledDropdown();
  const { toggle } = dropdownControls;
  const containerRef = useRef(null);

  return (
    <Atom atomRef={containerRef} element="div" css={{ border: '1px solid #ccc' }}>
      <ListButton onClick={toggle}>
        <ListItemBody>Toggle dropdown</ListItemBody>
      </ListButton>
      <Dropdown {...dropdownProps} bindTo={containerRef}>
        <List>
          <ListButton>
            <ListItemBody>Item body 1</ListItemBody>
          </ListButton>
          <ListButton>
            <ListItemBody>Item body 2</ListItemBody>
          </ListButton>
          <ListButton>
            <ListItemBody>Item body 3</ListItemBody>
          </ListButton>
        </List>
      </Dropdown>
    </Atom>
  );
};

export default DocHelper;
