import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigation() {
    
  return (
    <div>
        <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <NavLink to="/topnavigation">TopNavigation</NavLink>
        </div>
      
    </div>
  )
}

export default TopNavigation
