import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import merge from 'lodash/merge';

import contextTypes from './contextTypes';
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

  static childContextTypes = contextTypes;

  state = {
    touchDetected: false,
    theme: modifyTheme(this.props.theme),
  };

  getChildContext() {
    return {
      getColor: this.getColor,
      changeTheme: this.changeTheme,
      location: isServer ? this.props.location : getLocation(),
      modifyElement: this.props.modifyElement,
      theme: this.state.theme,
      touchDetected: this.state.touchDetected,
    };
  }

  componentDidMount() {
    window.addEventListener('touchstart', this.trackTouch);
  }

  componentWillUnmount() {
    this.untrackTouch();
  }

  trackTouch = () => {
    this.setState({ touchDetected: true });
    this.untrackTouch();
  };

  untrackTouch = () => window.removeEventListener('touchstart', this.trackTouch);

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
    return <ThemeProvider theme={this.state.theme}>{this.props.children}</ThemeProvider>;
  }
}
