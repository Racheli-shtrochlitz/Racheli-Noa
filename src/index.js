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
// import { CssVarsProvider, ThemeProvider,extendTheme } from '@mui/joy/styles';

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         background: {
//           default: '#f5f5f5', // Updated to use 'default' correctly
//         },
//       },
//     },
//     dark: {
//       palette: {
//         background: {
//           default: '#121212', // Updated to use 'default' correctly
//         },
//       },
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
// <React.StrictMode>
//   <CssVarsProvider>
//   <ThemeProvider theme={theme}>
//     <BrowserRouter>
//       <Provider store={myStore}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//     </ThemeProvider>
//     </CssVarsProvider>
//     </React.StrictMode>
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
import { CssVarsProvider, ThemeProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#1976d2', // ערך לדוגמה
        },
        background: {
          default: '#f5f5f5',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#bb86fc', // ערך לדוגמה
        },
        background: {
          default: '#121212',
        },
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
const myStore = configureStore({
  reducer: {
    UserSlice,
    RecipeListSlice,
  },
});

root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={myStore}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </CssVarsProvider>
  </React.StrictMode>
);

reportWebVitals();

