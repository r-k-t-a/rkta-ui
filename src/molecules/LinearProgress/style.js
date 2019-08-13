import css from '../../util/css';

export const getProgressStyle = completed => ({
  width: `${completed}%`,
});

export default css({
  defaultStyle: {
    height: '8px',
    position: 'relative',
    '> :nth-of-type(1)': {
      height: '100%',
      backgroundColor: 'currentColor',
      opacity: 0.3,
    },
    '> :nth-of-type(2)': {
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
