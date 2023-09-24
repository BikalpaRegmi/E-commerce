import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import FakestoreAPI from '../../services/fake-store';
import { Item } from '../../components/item';
const Products = () => {
  const [loading,setloading] = useState(true);
  const [products,setproducts] = useState([]);
  const [query,setquery] = useSearchParams();
  const[load,setload] = useState('Loading..')
  const searchQuery = query.get('q');
useEffect(()=>{
 try{
  const fetchProducts = async()=>{
  setloading(true);
  const products = searchQuery ? await FakestoreAPI.fetchProductBySearchQuery(searchQuery) : await FakestoreAPI.fetchAllProducts();
  setproducts(products);
  setloading(false);
  }
 fetchProducts()
}catch(err){
  console.log(err)
}
},[searchQuery])

if(!loading && searchQuery && !products.length){
  return(
    <>
      <div className='shadow-md h-16 flex align-center mt-9 justify-center bg-slate-300'> <b className='text-3xl pt-3'> No product found matching your search</b></div>
    </>
  )
}
setInterval(() => {
  setTimeout(() => {
    setload('Loading...')
  }, 1000);
  setTimeout(() => {
    setload('Loading..')
  }, 1500);
}, 1000);


  return (
   <>
  
    {loading ? 
    (<div className='mt-36 ml-40'><i className='text-7xl '>{load}</i></div>) : 
   (
    products.map((product)=>(
       <Item key={product.id} data={product} addToCart={()=>{}}/>
      ))
   ) }
   
   </>
  )
}

export {Products};
