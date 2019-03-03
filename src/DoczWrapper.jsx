import React from 'react';
import PropTypes from 'prop-types';
import { Client as Styletron } from 'styletron-engine-atomic';
import Provider from './Theme/Provider';

const engine = new Styletron();

const DoczWrapper = ({ children }) => <Provider value={engine}>{children}</Provider>;

DoczWrapper.propTypes = { children: PropTypes.node.isRequired };

export default DoczWrapper;
