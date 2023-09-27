import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      Sorry Page Not Found <Link to='/'> <i className='underline text-blue-300'>go back to home page</i></Link>
    </div>
  )
}

export  {NotFound}
