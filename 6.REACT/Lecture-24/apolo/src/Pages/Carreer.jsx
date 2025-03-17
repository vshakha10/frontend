import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Career = () => {

    const loaderData = useLoaderData()

    console.log('loaderData' , loaderData);
    

  return (
    <div>
      <h1 className='headtext'>This is Career Component</h1>
    </div>
  )
}

export const CareerApiData = async() => {
    let response = await fetch('https://fakestoreapiserver.reactbd.com/posts')
    let data = response.json()
    console.log(data);
    
}

export default Career
