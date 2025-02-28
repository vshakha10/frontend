import React from 'react'
import {NavLink , Link }from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='bg-purple-600 p-10 flex justify-evenly text-white font-black'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">AboutUs</NavLink></li>
            <li><NavLink to="/contact">ContactUs</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/pages">pages</NavLink></li>
            <li><NavLink to="/faq">Faq</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
