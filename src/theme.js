import { createTheme } from '@mui/material';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#4CAF50',  // ירוק
      light: '#81C784',  // ירוק בהיר
      dark: '#388E3C',  // ירוק כהה
      contrastText: '#fff',
    },
    secondary: {
      main: '#4A154B',  // סגול כהה
      light: '#9575CD',  // סגול בינוני
      dark: '#7E57C2',  // סגול כהה יותר
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',  // לבן נקי
      paper: '#f8f9f9',  // לבן עם נגיעות קלות
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    // הוספת סגנון ל-AppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#388E3C', // צבע ירוק כהה עבור ה-AppBar
          color: '#fff',
        },
      },
    },
  },
});
