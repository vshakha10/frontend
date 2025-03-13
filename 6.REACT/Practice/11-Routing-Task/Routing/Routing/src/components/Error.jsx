import React from "react";
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
    return(
    <div>
        <h1>404 - Page Not Found</h1>
        <button className='btn' onClick={() => navigate('/')}>Home Page</button>
    </div>
    
  )}
  
  export default Error;  