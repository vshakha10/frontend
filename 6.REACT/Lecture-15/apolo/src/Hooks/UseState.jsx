import React from "react";
import { useState } from "react";

const initialState = [
  {
    value: 10,
  },
  {
    data: 20,
  },
];

const UseState = () => {
  const [state, setState] = useState(initialState);

  const handleClickIncrement = () => {
    setState((prevItem) => {
      const newItem = [...prevItem];
      newItem[0] = { ...newItem, value: newItem[0].value + 1 };
      return newItem;
    });
  };

  const handleClickDecrement = () => {
    setState((prevItem) => {
      const newItem = [...prevItem];
      newItem[0] = { ...newItem, value: newItem[0].value - 1 };
      return newItem;
    });
  };

  const handleClickIncrement2 = () => {
    setState((prevItem) => {
      const newItem = [...prevItem];
      newItem[1] = { ...newItem, data: newItem[1].data + 1 };
      return newItem;
    });
  };
  const handleClickDecrement2 = () => {
    setState((prevItem) => {
      const newItem = [...prevItem];
      newItem[1] = { ...newItem, data: newItem[1].data - 1 };
      return newItem;
    });
  };

  console.log(state);

  return (
    <div>
      <h1 className="heading">This is useState in ReactJS</h1>
      <div className="heading">
        {state[0].value} {state[1].data}
      </div>

      {/* <button className='btn' onClick={() => setState([{value:state[0].value + 1} , {data:state[1].data}])}>incrementValue</button>
      <button className='btn' onClick={() => setState([{value:state[0].value - 1} , {data:state[1].data}])}>decrementValue</button>
      <button className='btn' onClick={() => setState([{value:state[0].value} , {data:state[1].data + 1}])}>incrementData</button>
      <button className='btn' onClick={() => setState([{value:state[0].value} , {data:state[1].data - 1}])}>decrementData</button> */}

      {/* <button
        className="btn"
        onClick={() => setState([{value: state[0].value - 1} , ...state])}
      >
        incrementValue

      </button>
      <button
        className="btn"
        onClick={() =>
          setState([{ value: state[0].value - 1 }, { data: state[1].data }])
        }
      >
        decrementValue
      </button>
      <button
        className="btn"
        onClick={() =>
          setState([{ value: state[0].value }, { data: state[1].data + 1 }])
        }
      >
        incrementData
      </button>
      <button
        className="btn"
        onClick={() =>
          setState([{ value: state[0].value }, { data: state[1].data - 1 }])
        }
      >
        decrementData
      </button> */}

      <button className="btn" onClick={handleClickIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleClickDecrement}>
        Decrement
      </button>
      <button className="btn" onClick={handleClickIncrement2}>
        Increment2
      </button>
      <button className="btn" onClick={handleClickDecrement2}>
        Decrement2
      </button>
    </div>
  );
};

export default UseState;
