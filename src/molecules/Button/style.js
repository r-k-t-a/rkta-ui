import css from '../../util/css';
import { text } from '../../Theme/color';

export default css({
  defaultStyle: {
    alignItems: 'center',
    borderWidth: 0,
    borderColor: text,
    cursor: 'pointer',
    display: 'inline-flex',
    height: '48px',
    justifyContent: 'center',
    minHeight: '48px',
    outline: 'none',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '16px',
    paddingRight: '16px',
    '-webkit-tap-highlight-color': 'transparent',
    userSelect: 'none',
  },
  autoHeight: {
    height: 'auto',
  },
  blockLevel: {
    display: 'flex',
    width: '100%',
  },
  fitAll: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  fitLeft: { paddingLeft: 0 },
  fitRight: { paddingRight: 0 },
  large: {
    height: '56px',
    minHeight: '56px',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  outline: {
    background: 'transparent',
    border: '2px solid',
    boxSizing: 'border-box',
  },
  small: {
    height: '32px',
    minHeight: '32px',
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  vertical: {
    flexDirection: 'column',
  },
});
