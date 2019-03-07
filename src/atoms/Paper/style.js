import css from '../../util/css';
import * as colors from '../../Theme/color';

const { paper } = colors;

export default css({
  defaultStyle: {
    borderRadius: '3px',
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
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
  },
  rounded: {
    borderBottomLeftRadius: '1200vw',
    borderBottomRightRadius: '1200vw',
    borderTopLeftRadius: '1200vw',
    borderTopRightRadius: '1200vw',
  },
  transparent: { backgroundColor: 'transparent' },
});
