//   const initialState4 = [{ value: 20, data: 30 }];

import React, { useState } from "react";

function Task4() {
  const initialState4 = [{ value: 20, data: 30 }];

  const [state, setState] = useState(initialState4);

  const incrementValue = () => {
    setState((prevState) => [{
        ...prevState[0],value: prevState[0].value + 1}]);
      }   

  const decrementValue = () => {
    setState((prevState) => [{
      ...prevState[0],value: prevState[0].value - 1}]);
    }   

  const incrementData = () => {
    setState((prevState) => [{
      ...prevState[0],data: prevState[0].data + 1,}]);
    }

  const decrementData = () => {
    setState((prevState) => [{
      ...prevState[0],data: prevState[0].data - 1}]);
  }

  return (
    <div>
      <h1 className="h4">Task 4</h1>
    <div className="head">
      <h2>Value: {state[0].value}</h2>
      <h2>Data: {state[0].data}</h2>
    </div>

    <div className="buttn">
      <button className="buttn1" onClick={incrementValue}>Increment Value</button>
      <button className="buttn2" onClick={decrementValue}>Decrement Value</button>
      <button className="buttn3" onClick={incrementData}>Increment Data</button>
      <button className="buttn4" onClick={decrementData}>Decrement Data</button>
    </div>

    </div>
  );
}

export default Task4;
