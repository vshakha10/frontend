import React from 'react'
import {usestate} from 'react'
import { useReducer } from 'react'



const Home = () => {

    const initialValue = {value:10}

    const reducer = (state , action) => {
        switch(action.type){
            case 'INCREMENT': return {value:state.value + 1}
            case 'DECREMENT': 
            if(state.value <= 0){
                return state
            }
            return {value:state.value - 1}
            default: return state
        }
    }

    const [state , dispatch] = useReducer(reducer , initialValue)
  return (
    <div>
      <h1> This is Home Page </h1>
      <div> {state.value} </div>
      <button onClick={() => dispatch({type:'INCREMENT'})}> + </button>
      <button onClick={() => dispatch({type:'DECREMENT'})}> - </button>
    </div>
  )
}

export default Home
