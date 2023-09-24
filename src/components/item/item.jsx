import React from 'react'
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Item = ({addToCart,data}) => {
    const {id,image,title,price} = data;
  return (
    <>
    <div className='float-left  px-12 ml-2'>
    <div className="mt-7 ml-7 shadow-md w-52  h-96 rounded-2xl p-1">
    <Link to={`/product/${id}`}>
    <div className="flex">
        <img src={image} alt="" className='rounded-[49px] pt-3 h-60 shadow-md pl-2 justify-center'/>
    </div></Link>
    <div className="mt-2  text-sm">
      <Link to={`/product/${id}`}>
       <i className='hover:underline cursor-pointer ml-3 capitalize' title='details' >{title}</i>
      </Link> 
    </div>
    <div className="flex justify-between text-3xl uppercase">
        <span className='pl-3 pt-3 text-rose-800'>{`$ ${price}`}</span>
        <span className='pt-3 pr-3  text-3xl rounded-full cursor-pointer hover:shadow-sm hover:bg-blue-700 bg-blue-900 text-white' title='add this item to cart' onClick={addToCart}> <AiOutlineShoppingCart className='mb-2 ml-2'/> </span>
    </div>
    </div>
    </div>
    </>
  )
}

export {Item}
