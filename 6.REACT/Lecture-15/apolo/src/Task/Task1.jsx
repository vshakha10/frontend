//   const initialState1 = { value: 20 };

import { useState } from "react";

function Task1() {
  const [value, setValue] = useState(20);

  const Increment = () => setValue(value + 1);
  const Decrement = () => setValue(value - 1);

  return (
    <div>
    <h1 className="h1">Task 1</h1>
      <h2 className="v1" >Value:{value}</h2>

      <div className="button">
      <button className="b1" onClick={Increment}>Increment</button>
      <button className="b2" onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Task1;
