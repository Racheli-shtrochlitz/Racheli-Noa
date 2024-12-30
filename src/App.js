import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Link, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';

const LazyHome = React.lazy(() => import('./Components/Home'))
const LazyLogin = React.lazy(() => import('./Components/Login'))

function App() {
  return (
    <div className="App" dir='rtl'>
      {/* <Link to={'/Login'}>Login</Link><br /> */}
      <Routes>
        <Route path='/' element={<Suspense fallback={'loading...'}><LazyHome /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={'loading...'}><LazyLogin /></Suspense>} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
