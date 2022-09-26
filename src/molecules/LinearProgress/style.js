import { keyframes } from '@emotion/react';
import css from '../../util/css';

const indeterminate = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
`;

export const getProgressStyle = progress =>
  progress === null
    ? {
        animation: `${indeterminate} 1.6s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite`,
        width: '50%',
      }
    : {
        width: `${progress}%`,
      };

export default css({
  defaultStyle: {
    position: 'relative',
    '> :first-of-type': {
      height: '100%',
      backgroundColor: 'currentColor',
      opacity: 0.3,
    },
    '> :last-of-type': {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      backgroundColor: 'currentColor',
      transition: 'width 0.4s ease',
      willChange: 'width',
    },
  },
});
