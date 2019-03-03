import css from '../../util/css';

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
