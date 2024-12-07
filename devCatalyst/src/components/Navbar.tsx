//import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav>
      <img/>
      <Link to='/'>Courses</Link>
      <Link to='/about'>About</Link>
      <img/>
      <button>Login</button>
      </nav>
    </div>
   
  )
}

export default Navbar
