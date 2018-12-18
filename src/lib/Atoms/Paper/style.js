import css from '../../util/css';
import mapColors from '../../util/mapColors';
import * as colors from '../../Theme/color';

const { extra, paper, ...named } = colors;

export default css({
  defaultStyle: {
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: paper,
    position: 'relative',
  },
  ...mapColors(named, 'backgroundColor'),
  ...mapColors(extra, 'backgroundColor', 'color'),
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
  round: { borderRadius: '1200vw' },
  transparent: { backgroundColor: 'transparent' },
});
