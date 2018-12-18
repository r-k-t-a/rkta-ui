import { createContext } from 'react';
import defaultTheme from './defaultTheme';

export default createContext({
  modifyElement: null,
  theme: defaultTheme,
  changeTheme() {},
});
