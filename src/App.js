import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { CssVarsProvider } from '@mui/joy';
import ResponsiveAppBar from './Components/ResponsiveAppBar'

const LazyHome = React.lazy(() => import('./Components/Home'))
const LazyLogin = React.lazy(() => import('./Components/LoginFinal'))
const LazyRecipeDetails = React.lazy(() => import('./Components/RecipeDetails'))
const LazyRecipeList = React.lazy(() => import('./Components/RecipeList'))

function App() {
  return (
    <div className="App" dir='rtl'>
      <Routes>
        <Route path='/' element={<Suspense fallback={'loading...'}><CssVarsProvider><LazyHome /></CssVarsProvider></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={'loading...'}><CssVarsProvider><LazyLogin /></CssVarsProvider></Suspense>} />
        <Route path='/RecipeDetails' element={<Suspense fallback={'loading...'}><CssVarsProvider><LazyRecipeDetails /></CssVarsProvider></Suspense>} />
        <Route path='/RecipeList' element={<Suspense fallback={'loading...'}><CssVarsProvider><LazyRecipeList /></CssVarsProvider></Suspense>} />
        <Route path='/appbar' element={<Suspense fallback={'loading...'}><ResponsiveAppBar /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
