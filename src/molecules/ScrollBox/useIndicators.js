import { useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';

const indicatorFatness = 4;
const defaultZIndex = 2;

const placementMap = {
  prev_false: 'left',
  next_false: 'right',
  prev_true: 'top',
  next_true: 'bottom',
};

const getIndicatorIsVisible = (domNode, placement) => {
  const { offsetHeight, offsetWidth, scrollHeight, scrollWidth, scrollTop, scrollLeft } = domNode;
  switch (placement) {
    case 'left':
      return scrollLeft > 0;
    case 'right':
      return scrollLeft + offsetWidth < scrollWidth;
    case 'top':
      return scrollTop > 0;
    case 'bottom':
      return scrollTop + offsetHeight < scrollHeight;
    default:
      return false;
  }
};

const getPositionCss = (domNode, placement) => {
  const { height, left, top, width } = domNode.getBoundingClientRect();
  switch (placement) {
    case 'top':
      return { top, left, width, height: indicatorFatness };
    case 'bottom':
      return { top: top + height - indicatorFatness, left, width, height: indicatorFatness };
    case 'left':
      return { left, top, height, width: indicatorFatness };
    case 'right':
      return { left: left + width - indicatorFatness, top, height, width: indicatorFatness };
    default:
      return null;
  }
};

const makeGetProps = (domNode, vertical, position) => () => {
  if (!domNode) return null;
  const placement = placementMap[`${position}_${vertical}`];
  if (!getIndicatorIsVisible(domNode, placement)) return null;

  let zIndex;
  try {
    const computedStyles = window.getComputedStyle(domNode);
    zIndex = parseInt(computedStyles.getPropertyValue('z-index'), 10) + 1 || defaultZIndex;
  } catch (error) {
    zIndex = defaultZIndex;
  }

  const css = { ...getPositionCss(domNode, placement), zIndex };
  return { css, placement };
};

export default function useIndicator(ref, vertical) {
  const getPrevProps = makeGetProps(ref, vertical, 'prev');
  const getNextProps = makeGetProps(ref, vertical, 'next');
  const [state, setState] = useState([getPrevProps(), getNextProps()]);

  function handleUpdate() {
    const prev = getPrevProps();
    const next = getNextProps();
    const stateHasChanged = !isEqual(prev, next);
    if (stateHasChanged) setState([prev, next]);
  }
  useEffect(() => {
    window.addEventListener('resize', handleUpdate);
    const intervalID = setInterval(handleUpdate, 32);
    return () => {
      window.removeEventListener('resize', handleUpdate);
      clearInterval(intervalID);
    };
  }, [ref, vertical]);

  return state;
}
