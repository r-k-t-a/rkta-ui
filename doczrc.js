export default {
  base: '/rkta-ui/',
  dest: 'docs',
  src: 'src',
  title: 'R·K·T·A UI',
  wrapper: 'src/DoczWrapper',
  modifyBabelRc: config => {
    Object.assign(config, { babelrc: true });
    return config;
  },
};
