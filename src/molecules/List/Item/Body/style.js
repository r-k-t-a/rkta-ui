import css from '../../../../util/css';

export default css({
  defaultStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  center: {
    alignItems: 'center',
  },
  fitAll: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  fitBottom: {
    paddingBottom: 0,
  },
  fitTop: {
    paddingTop: 0,
  },
  reverse: {
    flexDirection: 'column-reverse',
  },
  small: {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
});
