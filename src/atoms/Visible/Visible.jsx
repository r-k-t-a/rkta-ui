import React, { Component } from 'react';
import PropTypes from 'prop-types';

import contextTypes from '../../Theme/contextTypes';
import Atom from '../Atom';

import match from '../../util/matchMedia';

const mediaToString = mediaArray => mediaArray.join(', ');

class Visible extends Component {
  isMounted = false;

  componentDidMount() {
    this.isMounted = true;
    this.forceUpdate();
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  // eslint-disable-next-line
  componentWillUnMount() {
    this.isMounted = false;
    window.removeEventListener('resize', this.handleResize, true);
  }

  get clientQueries() {
    const { children, element, ...queryNames } = this.props;
    return Object.keys(queryNames).map(name => this.context.theme.mediaQueries[name]);
  }

  get serverQueries() {
    return this.clientQueries.map(query => `not ${query}`);
  }

  get clientContent() {
    const mq = mediaToString(this.clientQueries);
    const { children } = this.props;
    return match(mq) ? children : null;
  }

  get serverContent() {
    const { children, element } = this.props;
    const mq = `@media ${mediaToString(this.serverQueries)}`;
    return (
      <Atom css={{ [mq]: { display: 'none' } }} element={element}>
        {children}
      </Atom>
    );
  }

  handleResize = () => {
    if (this.isMounted) this.forceUpdate();
  };

  render() {
    return this.isMounted ? this.clientContent : this.serverContent;
  }
}

Visible.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
};
Visible.defaultProps = {
  element: 'div',
};
Visible.displayName = 'Visible';
Visible.contextTypes = contextTypes;

export default Visible;
