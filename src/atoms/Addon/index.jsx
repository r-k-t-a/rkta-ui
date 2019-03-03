import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Addon = ({ children, ...props }) => (
  <Atom element="span" {...props}>
    {children}
  </Atom>
);

Addon.displayName = 'Addon';
Addon.propTypes = {
  /** React node */
  children: PropTypes.node.isRequired,
  /** Padding: 0 */
  fitAll: PropTypes.bool,
  /** Left Padding: 0 */
  fitLeft: PropTypes.bool,
  /** Right Padding: 0 */
  fitRight: PropTypes.bool,
};
Addon.defaultProps = {
  fitAll: false,
  fitLeft: false,
  fitRight: false,
};

export const RawAdon = Addon;

export default withStyle(Addon);
