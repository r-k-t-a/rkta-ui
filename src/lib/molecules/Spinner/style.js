import css from '../../util/css';
import { text } from '../../Theme/color';

export default css({
  defaultStyle: {
    alignItems: 'center',
    borderColor: text,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
