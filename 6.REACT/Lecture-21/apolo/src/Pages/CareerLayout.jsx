import React from 'react'
import { Outlet } from 'react-router-dom'

const CareerLayout = () => {
  return (
    <div>
      <h1 className='headtext'>This is CareerLayout Component</h1>
      <Outlet/>
    </div>
  )
}

export default CareerLayout