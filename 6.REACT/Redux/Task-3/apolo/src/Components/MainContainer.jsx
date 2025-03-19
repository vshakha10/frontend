import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buy_cake, buy_choco, buy_data } from '../redux/Actions'

const MainContainer = () => {

    // const data = useSelector(state => state)
    const cake = useSelector((state) => state.cake);
    const choco = useSelector((state) => state.choco);
    const data = useSelector((state) => state.data);

    const dispatch = useDispatch()

    console.log(cake);
    
    
  return (
    <div>
       <h1 className='headtext'>MainContainer Component</h1>
      {/* <div className='btn'>{(data)}</div> */}
      <div className='button'>{cake}</div>
      <div className='button'>{choco}</div>
      <div className='button'>{data}</div>
      <button className='btn' onClick={() => dispatch(buy_cake())}>cake</button>
      <button className='btn' onClick={() => dispatch(buy_choco())}>choco</button>
      <button className='btn' onClick={() => dispatch(buy_data())}>data</button>
    </div>
  )
}

export default MainContainer
