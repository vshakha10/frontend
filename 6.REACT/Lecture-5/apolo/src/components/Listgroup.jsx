import React from 'react'

const Listgroup = ({name}) =>{

    let fruitsName=name

    // console.log('fruitsName',fruitsName);
    
  return (
    <>
      <ol>
        <li>{fruitsName[0]}</li>
        <li>{fruitsName[1]}</li>
        <li>{fruitsName[2]}</li>
        <li>{fruitsName[3]}</li>
      </ol>
    </>
  )
}

export default Listgroup
