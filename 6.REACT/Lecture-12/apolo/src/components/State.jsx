import React from 'react'
import Demo from './Demo'

function State   ()  {
    const print = () =>{
        let i = 10
        return console.log(i+=1);
        
    }

  return (
    <div>
      <h1 className='heading text-2xl bg-purple-600 text-white p-4 font-black text-center'>This is State Component</h1>
      <Demo print={print}/>
    </div>
  )
}

export default State
