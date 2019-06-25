import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../../../atoms/Atom';
import Font from '../../../../atoms/Font';
import withStyle from '../../../../Theme/withStyle';

const ListItemBody = ({ children, text, caption, href, ...rest }) => (
  <Atom element="span" {...rest}>
    {children || (
      <Fragment>
        {text}
        {caption && <Font caption>{caption}</Font>}
      </Fragment>
    )}
  </Atom>
);

ListItemBody.displayName = 'ListItemBody';
ListItemBody.propTypes = {
  caption: PropTypes.node,
  children: PropTypes.node,
  href: PropTypes.string,
  text: PropTypes.node,
};
ListItemBody.defaultProps = {
  caption: null,
  children: null,
  href: null,
  text: null,
};

export default withStyle(ListItemBody);
