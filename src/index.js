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
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// RTL Configuration
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
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
  <Provider store={store}>
    <CacheProvider value={cacheRtl}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CacheProvider>
  </Provider>
</React.StrictMode>
);

reportWebVitals();
