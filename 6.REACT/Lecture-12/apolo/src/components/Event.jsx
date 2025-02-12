import React from 'react'
import Demo from './Demo'

function Event  ()  {
    // const click = () => {
    //     alert("event called...")
    // }
  return (
    <div>
      <h1 className='heading text-2xl bg-purple-600 text-white p-4 font-black text-center'>This is Event Function</h1>
      <Demo handleClick ={()=> alert("Events Called....")}/>
    </div>
  )
}

export default Event
