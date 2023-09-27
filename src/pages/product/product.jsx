import React, { Component, useEffect, useState } from 'react';
import FakestoreAPI from '../../services/fake-store';
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link,useParams } from 'react-router-dom';
import { useCart } from '../../context/cart';
const Product = () => {
  const {productId} = useParams();
  const [loading,setLoading] = useState(true);
  const [product,setProduct] = useState();
  const {addToCart} = useCart();
  useEffect(()=>{
    try{
      const fetchProduct = async()=>{
    setLoading (true);
    const product = await FakestoreAPI.fetchProductById(productId);
    setProduct(product);
    setLoading(false);
   }
   fetchProduct();
  }catch(err){
    console.log('the error is ' + err);
   }
  },[productId])
  if(!loading && !product){
    return(
    <>
       <p>Sorry! Product not found <Link to='/'>go back to home page</Link></p>
    </>
    )
  }
  return (
   <>
    <div>
      {loading ? (
        <div className='mt-36 ml-40'><i className='text-7xl '>Loading...</i></div>)
       : (
        <>
        <div className="flex justify-around h-[450px] shadow-md w-9/12 mt-16 overflow-auto ml-48">
          <div className="mt-12">
           <img src={product.image} alt="" className='h-80 w-60 rounded-xl shadow-sm justify-start' />
          </div>

          <div className=' w-7/12 h-96'>
            <div className="title">
           <h1 className='text-3xl text-center font-bold'>{product.title}</h1>
            </div>

            <div className="mt-7"> 
                 <p className='text-lg pl-1'>{product.description}</p>
            </div>

            <div className="mt-7">
              <h3 className='text-3xl text-green-600'> $ {product.price} </h3>
            </div>

            <div className='flex justify-around'>
              <div className="mt-7">
                   <button className='bg-orange-700 border-4 hover:bg-orange-800 border-solid border-orange-900 rounded-2xl text-3xl p-1 text-white'>Buy Now</button>
              </div>
              <div className="mt-4">
               <button className='flex bg-blue-900 border-8 border-solid text-white border-blue-50 rounded-2xl text-3xl p-1 items-center hover:bg-blue-800' onClick={()=>addToCart(product)}>Add to {' '}<AiOutlineShoppingCart className=' text-5xl' /></button>
              </div>
            </div>
          </div>
        </div>
        </>
       )}
    </div>
   </>
  )
}

export {Product}
