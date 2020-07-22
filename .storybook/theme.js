import { create } from '@storybook/theming';
import logo from '../static/logo.png'

export default create({
  base: 'light',
  appBg: 'white',
  appBorderColor: '#dedede',
  appContentBg: 'white',
  appBorderRadius: '0px',
  gridCellSize: 4,

  brandTitle: 'Any Colour You Like',
  // brandUrl: 'https://agomes.dev',
  brandImage: logo,
});
