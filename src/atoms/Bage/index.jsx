import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../Paper';
import withStyle from '../../Theme/withStyle';

const Bage = props => <Paper rounded overline nowrap {...props} />;

Bage.displayName = 'Bage';
Bage.propTypes = {
  /** Reset Margins */
  fitAll: PropTypes.bool,
  /** Reset Left Margin */
  fitLeft: PropTypes.bool,
  /** Reset Right Margin */
  fitRight: PropTypes.bool,
};
Bage.defaultProps = {
  fitAll: false,
  fitLeft: false,
  fitRight: false,
};

export const RawBage = Bage;

export default withStyle(Bage);
