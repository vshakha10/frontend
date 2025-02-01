import React from 'react'

const FirstName = () => {

let intro = "This is demo components"

let profile = {
    name:'jack'
}


  return (
    <div>
      <h1>{intro}</h1>
      <span>{profile["name"]}</span>
    </div>
  )
}

export default FirstName