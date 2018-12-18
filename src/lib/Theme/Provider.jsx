import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'styletron-react';
import merge from 'lodash.merge';

import Context from './Context';
import defaultTheme from './defaultTheme';

export default class UiProvider extends Component {
  static propTypes = {
    changeTheme: PropTypes.func,
    theme: PropTypes.shape(),
  }
  static defaultProps = {
    changeTheme() {},
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
  render() {
    const { changeTheme } = this;
    const { theme } = this.state;
    const { children, modifyElement, ...rest } = this.props;
    return (
      <Provider {...rest}>
        <Context.Provider value={{ modifyElement, theme, changeTheme }}>
          {children}
        </Context.Provider>
      </Provider>
    );
  }
}
