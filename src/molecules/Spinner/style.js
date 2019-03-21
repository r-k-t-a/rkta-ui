import { keyframes } from '@emotion/core';
import css from '../../util/css';

const spin = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  24% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const getSegmentStyle = (borderWidth, size, color) => ({
  animation: `${spin} 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  borderWidth,
  borderBottomColor: color,
  borderTopColor: color,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderStyle: 'solid',
  borderRadius: '50%',
  boxSizing: 'border-box',
  width: size,
  height: size,
});

export default css({
  defaultStyle: {
    alignItems: 'center',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'relative',
  },
  blockLevel: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
