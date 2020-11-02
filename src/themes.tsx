import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#CE5555',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5596FC',
    },
    secondary: {
      main: '#CE5555',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
