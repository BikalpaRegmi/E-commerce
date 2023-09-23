import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Product} from './pages/product';
import {Products} from './pages/products';
import {Cart} from './pages/cart';
import {NotFound} from './pages/not-found';
import {Navbar} from './components';

const App = () => {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path='/' Component={Products}/>
        <Route path='cart' Component={Cart}/>
        <Route path='*' Component={NotFound}/>
        <Route path='/product/:productId' Component={Product}/>
      </Routes>
    </>
  )
}

export default App
