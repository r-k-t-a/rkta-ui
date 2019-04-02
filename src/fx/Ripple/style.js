import css from '../../util/css';

export default css({
  defaultStyle: {
    display: 'block',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.48s ease',
    userSelect: 'none',
    width: '100%',
    willChange: 'opacity',
  },
  highlight: {
    opacity: 0.16,
  },
});
