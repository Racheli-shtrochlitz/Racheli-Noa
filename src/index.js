// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { configureStore } from '@reduxjs/toolkit';
// import UserSlice from './Store/UserSlice';
// import RecipeListSlice from './Store/RecipeListSlice';
// import { Provider } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssVarsProvider } from '@mui/joy/styles';

// // const theme = createTheme({
// //   palette: {
// //     mode: 'light', // Default mode
// //     background: {
// //       default: '#f5f5f5', // Light theme background
// //     },
// //   },
// // });

// const theme = createTheme({
//   palette: { // שים לב לשגיאת הכתיב שתוקנה כאן
//     background: {
//       default: '#ffffff', // ברירת מחדל של צבע רקע
//       paper: '#ffffff',
//     },
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const myStore = configureStore({
//   reducer: {
//     UserSlice,
//     RecipeListSlice,
//   },
// });

// root.render(
//   <React.StrictMode>
//     <CssVarsProvider>
//       <ThemeProvider theme={theme}>
//         <BrowserRouter>
//           <Provider store={myStore}>
//             <App />
//           </Provider>
//         </BrowserRouter>
//       </ThemeProvider>
//     </CssVarsProvider>
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Store/UserSlice';
import RecipeListSlice from './Store/RecipeListSlice';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// הגדרת תמה אחת מאוחדת עבור Material-UI
const theme = createTheme({
  direction: 'rtl', // תמיכה בעברית
  palette: {
    primary: {
      main: '#F06292', // ורוד בהיר
      light: '#F8BBD0',
      dark: '#E91E63',
    },
    secondary: {
      main: '#FF4081',
      light: '#FF80AB',
      dark: '#C51162',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(247, 152, 220, 0.9)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
  },
});

// הגדרת ה-Redux Store
const myStore = configureStore({
  reducer: {
    UserSlice,
    RecipeListSlice,
  },
});

// רינדור האפליקציה
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={myStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();