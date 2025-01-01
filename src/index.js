import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Store/UserSlice';
import RecipeListSlice from './Store/RecipeListSlice';
import { Provider } from 'react-redux'
import { CssVarsProvider } from '@mui/joy/styles';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myStore = configureStore({
  reducer: {
    UserSlice,
    RecipeListSlice
  }
})
root.render(
  <BrowserRouter>
  <CssVarsProvider>
  <Provider store={myStore}>
    <App />
    </Provider>
    </CssVarsProvider>
  </BrowserRouter>
);

reportWebVitals();
