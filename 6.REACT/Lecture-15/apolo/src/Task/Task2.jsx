// const initialState2 = { value: 20, data: 30 };

import React from "react";
import {useState} from "react";

function Task2() {
  const [state, setState] = useState({ value: 20, data: 30 });

  const IncrementValue = () =>
    setState((prevState) => ({ ...prevState, value: prevState.value + 1 }));

  const DecrementValue = () =>
    setState((prevState) => ({ ...prevState, value: prevState.value - 1 }));

  const IncrementData = () =>
    setState((prevState) => ({ ...prevState, data: prevState.data + 1 }));

  const DecrementData = () =>
    setState((prevState) => ({ ...prevState, data: prevState.data - 1 }));

  return (
    <div>
      <h1 className="h2">Task 2</h1>
      <div className="heading">
      <h2 >Value: {state.value}</h2>
      <h2>Data: {state.data}</h2>
    </div>

    <div className="btn">
      <button className="btn1" onClick={IncrementValue}>Increment Value</button>
      <button className="btn2" onClick={DecrementValue}>Decrement Value</button>
      <button className="btn3" onClick={IncrementData}>Increment Data</button>
      <button className="btn4" onClick={DecrementData}>Decrement Data</button>
      </div>
    </div>
  );
}

export default Task2;
