import React from 'react';

const defaultRenderrer = (Component, { href, ...rest }) => {
  if (href) return <Component {...rest} element="a" href={href} />;
  return <Component {...rest} />;
};

export default defaultRenderrer;
