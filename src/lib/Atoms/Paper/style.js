import { css, mapColors } from '../../util';
import * as colors from '../../Theme/color';

const { extra, paper, ...primary } = colors;


export default css({
  ...mapColors(primary, (acc, key) => Object.assign(
    acc,
    { [key]: { backgroundColor: primary[key] } },
  )),
  ...mapColors(extra, (acc, key) => Object.assign(
    acc,
    { [`color${key}`]: { backgroundColor: extra[key] } },
  )),
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
  round: { borderRadius: '1200vw' },
  transparent: { backgroundColor: 'transparent' },
});
