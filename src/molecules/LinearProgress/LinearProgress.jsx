import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../../Theme/withStyle';
import Atom from '../../atoms/Atom';
import Paper from '../../atoms/Paper';
import { getProgressStyle } from './style';

const LinearProgress = ({ completed, ...props }) => (
  <Paper clip transparent hard {...props}>
    <Atom />
    <Atom css={getProgressStyle(completed)} />
  </Paper>
);

LinearProgress.displayName = 'LinearProgress';

LinearProgress.propTypes = {
  /** Completed percents */
  completed: PropTypes.number,
};

LinearProgress.defaultProps = {
  completed: 0,
};

export const SimpleLinearProgress = LinearProgress;

export default withStyle(LinearProgress);
