import css from '../../util/css';
import { text } from '../../Theme/color';

export default css({
  defaultStyle: {
    borderWidth: 0,
    borderColor: text,
    cursor: 'pointer',
    height: '48px',
    outline: 'none',
    padding: '0 16px',
  },
  autoHeight: {
    height: 'auto',
  },
  blockLevel: {
    display: 'block',
    width: '100%',
  },
  fitAll: { padding: 0 },
  fitLeft: { paddingLeft: 0 },
  fitRight: { paddingRight: 0 },
  large: {
    height: '56px',
    padding: '0 32px',
  },
  outline: {
    background: 'transparent',
    border: '2px solid',
    boxSizing: 'border-box',
  },
  small: {
    height: '32px',
    padding: '0 8px',
  },
});
