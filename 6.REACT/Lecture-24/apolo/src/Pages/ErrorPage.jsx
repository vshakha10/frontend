import React from 'react'
import { useNavigate } from 'react-router-dom'


/* useNavigate Hook React  Router Dom */

const ErrorPage = () => {

    const navigate = useNavigate()

  return (
    <div className='center flex-col'>
      <h1 className='headtext'>This is Error 404 Page Not Found</h1>
      <button className='btn' onClick={() => navigate('/')}>Home Page</button>
    </div>
  )
}

export default ErrorPage