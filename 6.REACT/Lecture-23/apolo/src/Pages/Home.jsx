import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { AiFillEnvironment } from "react-icons/ai";


const Home = () => {

  const initialValue = {value:10}

  const reducer = (state , action) => {
    switch(action.type){
      case 'INCREMENT':return {value:state.value + 1}
      case 'DECREMENT':
        if(state.value <= 0 ){
          return state
        }
        return {value:state.value - 1}
      default: return state
    }
  }

  const [state , dispatch] = useReducer(reducer , initialValue)


  return (
    <div className='center'>
      <h1 className='headtext'>This is FAQ Page <AiFillEnvironment/></h1>
      <div className='active-btn'>{state.value}</div>
      <button className='active-btn' onClick={() => dispatch({type:'INCREMENT'})}>+</button>
      <button className='active-btn' onClick={() => dispatch({type:'DECREMENT'})}>-</button>
    </div>
  )
}

export default Home