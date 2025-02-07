import React from 'react'

const ListName = ({user}) => {
  
  return (
    <div>
      <h1>This is ListName Components {user.subject}</h1>
      <span className='text-center'>Time : {user.time}</span>
    </div>
  )
}

export default ListName