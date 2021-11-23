import { createTheme } from '@mui/material/styles';

export const generalTheme = createTheme({
  palette: {
    primary: {
      main: '#4aa271',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff8585',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3fc1c9',
      light: '#8bdade',
      dark: '#22767b',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#dbdbdb',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Arial',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'Meiryo',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 340,
      md: 550,
      lg: 768,
      xl: 1024,
    },
  },
});
