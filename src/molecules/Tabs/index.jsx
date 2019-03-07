import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Paper from '../../atoms/Paper';
import withStyle from '../../Theme/withStyle';

import Indicator from './Indicator';

class Tabs extends Component {
  state = {
    activeTab: 0,
    domNode: null,
  };

  get activeTab() {
    return get(this.props, 'activeTab', this.state.activeTab);
  }

  get children() {
    const { children, color } = this.props;
    const { activeTab } = this;
    return Children.map(children, (child, index) => {
      const nextProps = {
        hardBottom: true,
        onClick: () => {
          this.setState({ activeTab: index });
          this.props.onChange(index);
        },
      };
      if (index === activeTab) {
        Object.assign(nextProps, {
          color: child.props.color || color,
        });
      }
      return cloneElement(child, nextProps);
    });
  }

  ref = domNode => this.setState({ domNode });

  render() {
    const {
      activeTab,
      center,
      children,
      color,
      indicatorHeight,
      getColor,
      onChange,
      reverse,
      right,
      ...rest
    } = this.props;
    const { domNode } = this.state;
    return (
      <Paper {...rest} atomRef={this.ref}>
        {this.children}
        <Indicator
          activeTab={this.activeTab}
          color={getColor(color)}
          height={indicatorHeight}
          domNode={domNode}
        />
      </Paper>
    );
  }
}

Tabs.propTypes = {
  // # of the active tab
  activeTab: PropTypes.number, // eslint-disable-line react/require-default-props
  // Align tabs to center
  center: PropTypes.bool,
  // Tabs
  children: PropTypes.node.isRequired,
  // Active tab color
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // Privider utility
  getColor: PropTypes.func.isRequired,
  // Indicator height
  indicatorHeight: PropTypes.number,
  // Tab click handler
  onChange: PropTypes.func,
  // Reverse tabs
  reverse: PropTypes.bool,
  // Align tabs to end
  right: PropTypes.bool,
};

Tabs.defaultProps = {
  center: false,
  color: 'text',
  indicatorHeight: 2,
  onChange() {},
  reverse: false,
  right: false,
};

Tabs.displayName = 'Tabs';

export const SimpleTabs = Tabs;

export default withStyle(Tabs);
