import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset } from '../redux/Actions'

const MainContainer = () => {

    // const data = useSelector(state => state)
    const data = useSelector(state => state);

    const dispatch = useDispatch()

    console.log(data);
    
  return (
    <div>
      <h1 className='headtext'>MainContainer Component</h1>
      <div className='btn'>{data}</div>
      <button className='btn' onClick={() => dispatch(increment())}>increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>decrement</button>
      <button className='btn' onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default MainContainer
