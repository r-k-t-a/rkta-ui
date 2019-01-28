import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'styletron-react';
import merge from 'lodash.merge';

import Context from './Context';
import defaultTheme from './defaultTheme';

export default class UiProvider extends Component {
  static propTypes = {
    changeTheme: PropTypes.func,
    pathname: PropTypes.string,
    theme: PropTypes.shape(),
  }
  static defaultProps = {
    changeTheme() {},
    pathname: null,
    theme: {},
  }
  state = {
    theme: merge(defaultTheme, this.props.theme),
  }
  changeTheme = (...args) => {
    const nextTheme = this.props.changeTheme(...args);
    this.setState({
      theme: merge(defaultTheme, nextTheme),
    });
  }
  getColor = (color) => {
    const { colors } = this.state.theme;
    const colorValue = typeof color === 'number' ? colors.extra[color] : colors[color];
    return colorValue || colors.text;
  }
  render() {
    const { changeTheme } = this;
    const { theme } = this.state;
    const { children, pathname, modifyElement, ...rest } = this.props;
    return (
      <Provider {...rest}>
        <Context.Provider
          value={{
            getColor: this.getColor,
            pathname: window ? window.location.pathname : pathname,
            changeTheme,
            modifyElement,
            theme,
          }}
        >
          {children}
        </Context.Provider>
      </Provider>
    );
  }
}
