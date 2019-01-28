import css from '../../../../util/css';

export default css({
  defaultStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '12px 16px',
  },
  center: {
    alignItems: 'center',
  },
  fitAll: {
    padding: 0,
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
    padding: '4px 16px',
  },
});
