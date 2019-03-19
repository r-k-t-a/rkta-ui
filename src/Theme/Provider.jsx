import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import Context from './Context';
import defaultTheme from './defaultTheme';
import isServer from '../util/isServer';
import mapColors from '../util/mapColors';

function getLocation() {
  const { origin, href } = window.location;
  return href.replace(origin, '');
}

function modifyTheme(nextTheme) {
  const mergedTheme = merge(defaultTheme, nextTheme);
  const { extra, ...named } = mergedTheme.colors;
  return Object.assign(mergedTheme, {
    Paper: {
      ...mergedTheme.Paper,
      ...mapColors(named, 'backgroundColor'),
      ...mapColors(extra, 'backgroundColor', 'color'),
    },
  });
}

export default class UiProvider extends Component {
  static propTypes = {
    changeTheme: PropTypes.func,
    children: PropTypes.node.isRequired,
    location: PropTypes.string,
    modifyElement: PropTypes.func,
    theme: PropTypes.shape(),
  };

  static defaultProps = {
    changeTheme() {},
    location: null,
    modifyElement: null,
    theme: {},
  };

  state = {
    theme: modifyTheme(this.props.theme),
  };

  changeTheme = (...args) => {
    const nextTheme = this.props.changeTheme(...args);
    this.setState({
      theme: modifyTheme(nextTheme),
    });
  };

  getColor = color => {
    const { colors } = this.state.theme;
    const colorValue = typeof color === 'number' ? colors.extra[color] : colors[color];
    return colorValue || colors.text;
  };

  render() {
    const { changeTheme } = this;
    const { theme } = this.state;
    const { children, location, modifyElement } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{
            getColor: this.getColor,
            location: isServer ? location : getLocation(),
            changeTheme,
            modifyElement,
            theme,
          }}
        >
          {children}
        </Context.Provider>
      </ThemeProvider>
    );
  }
}
