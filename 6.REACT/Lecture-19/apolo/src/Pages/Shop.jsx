import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div>
      <h1 className='headtext'>This is Shop Page</h1>
      <nav>
        <Link to="/shop/oldproduct">OldProduct</Link>
        <Link to="/shop/newproduct">NewProduct</Link>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Shop