import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { CssVarsProvider } from '@mui/joy';

const LazyHome = React.lazy(() => import('./Components/Home'))
const LazyLogin = React.lazy(() => import('./Components/LoginFinal'))
const LazyRecipeDetails = React.lazy(() => import('./Components/RecipeDetails'))
const LazyRecipeList = React.lazy(() => import('./Components/RecipeList'))

function App() {
  return (
    <div className="App" dir='rtl'>
      <Routes>
        <Route path='/' element={<Suspense fallback={'loading...'}><LazyHome /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={'loading...'}><CssVarsProvider><LazyLogin /></CssVarsProvider></Suspense>} />
        <Route path='/RecipeDetails' element={<Suspense fallback={'loading...'}><LazyRecipeDetails /></Suspense>} />
        <Route path='/RecipeList' element={<Suspense fallback={'loading...'}><LazyRecipeList /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
