import React from 'react'
import Listgroup from './Listgroup'

const Listitem =({item})=> {
    let Fruits=['Banana','Kiwi','Mango','Apple']
  return (
    <>
      <li value="html">{`${item}`}</li>
      <Listgroup name={Fruits}/>
    </>
  )
}

export default Listitem
 