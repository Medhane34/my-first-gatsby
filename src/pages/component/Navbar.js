import { Link } from 'gatsby'
import React from 'react'

export default function Menu() {
  return (
      <nav> 
          <div>Menu Bar </div> 
          <Link to='/home'> Home </Link>
          <Link to='/about'> about us </Link>
      </nav>
    
    
  )
}
