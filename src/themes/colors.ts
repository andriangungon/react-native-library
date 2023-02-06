const commonColors = {
  // Contextual colors
  clear: 'transparent',
  danger: '#fe534c',
  default: '#676767',
  info: '#2089dc',
  muted: '#ABABAB',
  success: '#4EAD6F',
  warning: '#eda15d',
}

const borderColors = {
  borderColor: '#EFEFEF',
}

const chartColors = {
  blue1: '#2D67B0',
  blue2: '#5AAEE3',
  blue3: '#81CAEA',
  chartDefaut: '#EDEDED',
}

const grayColors = {
  gray0: '#555555',
  gray1: '#676767',
  gray2: '#828282',
  gray3: '#ABABAB',
  gray4: '#C6C6C6',
  gray5: '#FAFAFA',
  gray6: '#ececec',
}

const customerColors = {
  approved: '#81CAEA',
  prospects: '#2D67B0',
  rejected: '#0F2A5B',
  pending: '#5AAEE3',
}

const colors = {
  white: '#fff',
  primary: '#41547d',
  secondary: '#41547d',
  gray: '#bdbdbd',
  grayLight: '#f3f4f6',
  accent: '#81CAEA',
  textDark: '#0F172A',
  textLight: '#999999',

  ...borderColors,
  ...chartColors,
  ...commonColors,
  ...customerColors,
  ...grayColors,
};

export default colors;