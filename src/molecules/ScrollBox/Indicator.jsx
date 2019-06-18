import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';

const getBoxCss = placement => ({
  background: `radial-gradient(at ${placement}, rgba(0,0,0,.2), transparent 70%)`,
  position: 'fixed',
});

const Indicator = ({ css, placement }) => <Atom css={{ ...getBoxCss(placement), ...css }} />;

Indicator.propTypes = {
  css: PropTypes.shape(),
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};
Indicator.defaultProps = {
  css: null,
};

export default Indicator;
