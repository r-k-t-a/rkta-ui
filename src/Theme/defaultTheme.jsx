import Addon from '../atoms/Addon/style';
import Bage from '../atoms/Bage/style';
import Divider from '../atoms/Divider/style';
import Font from '../atoms/Font/style';
import Header from '../atoms/Header/style';
import Paper from '../atoms/Paper/style';
import Svg from '../atoms/Svg/style';

import Button from '../molecules/Button/style';
import InputBase from '../molecules/Input/Base/style';
import InputOutline from '../molecules/Input/Outline/style';
import List from '../molecules/List/style';
import ListItem from '../molecules/List/Item/style';
import ListItemBody from '../molecules/List/Item/Body/style';
import Spinner from '../molecules/Spinner/style';
import Tabs from '../molecules/Tabs/Tabs.style';

import Ripple from '../fx/Ripple/style';
import createMediaQueries from '../util/createMediaQueries';

import colors from './color';

export default {
  colors,
  mediaQueries: createMediaQueries(),

  Addon,
  Bage,
  Divider,
  Font,
  Header,
  Paper,
  Svg,

  Button,
  InputBase,
  InputOutline,
  List,
  ListItem,
  ListItemBody,
  Spinner,
  Tabs,

  Ripple,
};
