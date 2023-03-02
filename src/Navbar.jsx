import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header>
    <div className="logo">
    Y.A.W
    </div>
    <div className="menua">
    <Link className='menu' to={ "/About" }>About</Link>
    <Link className='menu' to={ "/Service" }>Services</Link>
   <Link className='menu' to={ "/Portfolio" }>Portfolio</Link>
   <Link className='menu' to={ "/" }>Home</Link>
    
    </div>
    </header>
    </>
  )
}

export default Navbar