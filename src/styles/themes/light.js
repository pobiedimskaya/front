import defaultTheme from './defaultTheme';

const lightTheme = {
  ...defaultTheme,
  colors: {
    common: {
      black: '#000',
      black40: '#D0D0D8',
      white: '#fff',
    },
    primary: {
      dark: '#E87928',
      main: '#FF8B37',
      light: '#FFAC70',
      xLight: '#FFF3EB',
    },
    success: {
      main: '#47D867',
      light: '#E6FAEA',
    },
    error: {
      main: '#EC6259',
      light: '#FDEEED',
    },
    background: {
      default: '#F5F5F7',
      paper: '#fff',
    },
    text: {
      primary: '#1C1C21',
      disabled: '#D0D0D8',
    },
  },
};

export default lightTheme;
