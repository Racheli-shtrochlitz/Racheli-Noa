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
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// RTL Configuration
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Theme Configuration - Simplified
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#F06292',
      light: '#F8BBD0',
      dark: '#E91E63',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF4081',
      light: '#FF80AB',
      dark: '#C51162',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

// Redux Store Configuration
const store = configureStore({
  reducer: {
    UserSlice,
    RecipeListSlice,
  },
});

// Application Rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);

reportWebVitals();
