/* eslint-disable react/jsx-filename-extension, import/extensions, import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../../src/Theme/Provider';

const DoczWrapper = ({ children }) => {
  return <Provider>{children}</Provider>;
};

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
