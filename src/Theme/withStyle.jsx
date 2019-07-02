import contextTypes from './contextTypes';
import defaultRenderrer from './defaultRenderrer';
import invariant from '../util/invariant';

const modifyStyles = (context, { children, ...props }, element, ref) => {
  const { defaultStyle, ...styles } = context.theme[element];
  const { nextStyle, nextProps } = Object.keys(props).reduce(
    (acc, key) => {
      const value = props[key];
      if (value === true && key in styles) Object.assign(acc.nextStyle, styles[key]);
      else if (!(key in styles)) Object.assign(acc.nextProps, { [key]: value });
      return acc;
    },
    {
      nextProps: {},
      nextStyle: { ...defaultStyle },
    },
  );
  const css = { ...nextStyle, ...props.css };
  return { ...nextProps, ...context, children, css, ref };
};

const pickProps = (context, props, elementName, ref) => {
  if (elementName in context.theme) return modifyStyles(context, props, elementName, ref);
  return { ...props, ...context, ref };
};

const withStyle = (Element, key) => {
  const { displayName } = Element;
  const WithStyle = ({ forwardRef, ...props }, parentContext) => {
    const { modifyElement, providerIsMissing, ...context } = parentContext;
    invariant(!providerIsMissing, 'Please use the Provider');
    const render = modifyElement || defaultRenderrer;
    return render(Element, pickProps(context, props, key || displayName, forwardRef));
  };
  WithStyle.contextTypes = contextTypes;
  WithStyle.displayName = displayName;
  Element.displayName = `Styled ${displayName}`; // eslint-disable-line no-param-reassign
  return WithStyle;
};

export default withStyle;
