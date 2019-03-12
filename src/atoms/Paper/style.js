import css from '../../util/css';
import * as colors from '../../Theme/color';

const { paper } = colors;

const roundCorners = radius => ({
  borderBottomLeftRadius: radius,
  borderBottomRightRadius: radius,
  borderTopLeftRadius: radius,
  borderTopRightRadius: radius,
});

export default css({
  defaultStyle: {
    ...roundCorners('3px'),
    boxSizing: 'border-box',
    backgroundColor: paper,
    position: 'relative',
  },
  clip: { overflow: 'hidden' },
  disabled: {
    pointerEvents: 'none',
    opacity: '0.4',
    userSelect: 'none',
  },
  hard: { borderRadius: '0' },
  hardBottom: { borderBottomLeftRadius: '0', borderBottomRightRadius: '0' },
  hardLeft: { borderBottomLeftRadius: '0', borderTopLeftRadius: '0' },
  hardTop: { borderTopLeftRadius: '0', borderTopRightRadius: '0' },
  hardRight: { borderBottomRightRadius: '0', borderTopRightRadius: '0' },
  round: {
    ...roundCorners('50%'),
  },
  rounded: {
    ...roundCorners('1200vw'),
  },
  transparent: { backgroundColor: 'transparent' },
});
