import React from 'react';
import {Route,Routes,useNavigate,createSearchParams} from 'react-router-dom';
import {Product} from './pages/product';
import {Products} from './pages/products';
import {Cart} from './pages/cart';
import {NotFound} from './pages/not-found';
import {Navbar} from './components/navbar'
import {useCart} from './context/cart' 
const App = () => {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();
  
  const onSearch = (searchQuery) =>{
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  return (
    <>
    <Navbar onSearch={onSearch} cartItemCount={cartItemCount()}/> 
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
