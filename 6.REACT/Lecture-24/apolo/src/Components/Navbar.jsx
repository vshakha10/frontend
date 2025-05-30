import React from 'react'
import { Link , NavLink , Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Navbar = () => {

  const location = useLocation()
  console.log(location);
  return (
    <div>
      <nav>
        <ul className='bg-purple-600 p-10 flex justify-evenly text-white font-black'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/pages">pages</NavLink></li>
            <li><NavLink to="/faq">Faq</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/careerlayout">Carrer</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Navbar