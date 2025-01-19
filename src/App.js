import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // הייבוא עכשיו מתוך תיקיית src
import { CssBaseline } from '@mui/material';
import AddRecipeAlert from './Components/AddRecipeAlert';
const LazyHome = React.lazy(() => import('./Components/Home'))
const LazyLogin = React.lazy(() => import('./Components/LoginFinal'))
const LazyRecipeDetails = React.lazy(() => import('./Components/RecipeDetails'))
const LazyRecipeList = React.lazy(() => import('./Components/RecipeList'))
const LazyAbout = React.lazy(() => import('./Components/About'))
const LazyContact = React.lazy(() => import('./Components/Contact'))
const LazyProfile = React.lazy(() => import('./Components/Profile'))
const LazyLogout = React.lazy(() => import('./Components/Logout'))

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <CssBaseline /> 
    <div className="App" dir='rtl'>
      <Routes>
        <Route path='/' element={<Suspense fallback={'loading...'}><LazyHome /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={'loading...'}><LazyLogin /></Suspense>} />
        <Route path='RecipeDetails/:id' element={<Suspense fallback={'loading...'}><LazyRecipeDetails /></Suspense>} />
        <Route path='/RecipeList' element={<Suspense fallback={'loading...'}><LazyRecipeList /></Suspense>} />
        <Route path='/appbar' element={<Suspense fallback={'loading...'}><ResponsiveAppBar /></Suspense>} />
        <Route path='/about' element={<Suspense fallback={'loading...'}><LazyAbout /></Suspense>} />
        <Route path='/contact' element={<Suspense fallback={'loading...'}><LazyContact /></Suspense>} />
        <Route path='/profile' element={<Suspense fallback={'loading...'}><LazyProfile /></Suspense>} />
        <Route path='/AddRecipeAlert' element={<Suspense fallback={'loading...'}><AddRecipeAlert /></Suspense>} />
        <Route path='/account' element={<Suspense fallback={'loading...'}><LazyProfile /></Suspense>} />
        <Route path='/logout' element={<Suspense fallback={'loading...'}><LazyLogout /></Suspense>} />
      </Routes>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
