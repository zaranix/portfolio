import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#111', 
    },
    text: {
      primary: '#ffffff', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
