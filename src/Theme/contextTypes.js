import PropTypes from 'prop-types';

export default {
  getColor: PropTypes.func,
  changeTheme: PropTypes.func,
  location: PropTypes.string,
  modifyElement: PropTypes.func,
  providerIsMissing: PropTypes.bool,
  theme: PropTypes.shape(),
  touchDetected: PropTypes.bool,
};
