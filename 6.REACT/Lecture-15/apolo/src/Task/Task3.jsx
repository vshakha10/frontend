// const initialState3 = [{ value: 20 }];

import React, { useState } from "react";

function Task3() {
  const initialState3 = [{ value: 20 }];
  const [state, setState] = useState(initialState3);

  const Increment = () => {
    setState((prevState) => [{ value: prevState[0].value + 1 }]);
  };

  const Decrement = () => {
    setState((prevState) => [{ value: prevState[0].value - 1 }]);
  };

  return (
    <div>
      <h1 className="h3">Task 3</h1>
      <h2 className="v3">Value: {state[0].value}</h2>
      <div className="butn">
      <button className="butn1"onClick={Increment}>Increment</button>
      <button className="butn2"onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Task3;
