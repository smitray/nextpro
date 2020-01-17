import { createMuiTheme } from '@material-ui/core/styles';
import {
  red,
  grey,
  indigo,
  orange,
  green,
  blue
} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
      dark: '#071e3d'
    },
    secondary: {
      main: red[500]
    },
    error: {
      main: orange[600]
    },
    warning: {
      main: orange[600]
    },
    success: {
      main: green[500]
    },
    info: {
      main: blue[500]
    },
    background: {
      primary: grey[50]
    },
    text: {
      primary: grey[900]
    }
  },
  typography: {
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    h6: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 500
    }
  }
});

export default theme;
