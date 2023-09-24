import React, { useState } from 'react'
import { AiOutlineShoppingCart,AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({onSearch,cartItemCount}) => {

  const [searchQuery,setSearchQuery] = useState('');
  const handleSubmit = () =>{
       if(searchQuery.trim().length){
        onSearch(searchQuery.trim());
        setSearchQuery('');
      }
  }
  return (
    <>
      <header>
        <div className="flex justify-around bg-green-700 h-12 pt-0">
        <Link to ='/'>
        <p className='text-white text-3xl p-0 cursor-pointer hover:opacity-60 hover:bg-gray-300 hover:text-blue-700 rounded-3xl font-bold pl-3 pr-3 pt-1 hover:shadow-md mt-1' title='Go to home page'> Buy Bikalpa </p>
        </Link>
        
        <div className='flex bg-cyan-50 rounded-2xl opacity-90 h-9 mt-1'>
          <input type='text' value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)} placeholder='search product' className='rounded-3xl w-56 pl-3 focus:outline-none'/>
          <AiOutlineSearch title='Search garam!' className='h-9 w-7 rounded-full cursor-pointer hover:bg-cyan-100' onClick={handleSubmit}/>
     </div>
          <div >
          <NavLink to='/cart' className='flex flex-row justify-between  w-16'>
     <AiOutlineShoppingCart className='h-9 w-9 text-gray-300 cursor-pointer hover:text-gray-50 mt-1' />
        {cartItemCount>0 && (  <div className='text-2xl mt-3 border-dashed border-x-2 rounded-full border-black text-white'>{ cartItemCount<=9 ? cartItemCount : '9+'} </div>)}
        
          </NavLink>
        </div>
        </div>
      </header>
    </>
  )
}

export  {Navbar}
