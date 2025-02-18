import React, { useState } from "react";

const UseState = () => {
  const [state, setState] = useState([
    {
      value: 10,
    },
    {
      data: 20,
    },
  ]);

//   const handleClick = () => {
//     setState(
//       state.map((item, index) => {
//         if (index === 0) {
//           return { ...item, value: item.value + 1 };
//         }
//         return item;
//       })
//     );
//   };

  const handleClick = () => {
    setState(
      state.map((prevItem) => {
        const newItem = [...prevItem];
        const data = [...newItem[0], { value: newItem[0].value + 1 }];
        return console.log(data);
      })
    );
  };

  console.log(state);

  return (
    <div>
      <h1 className="heading">This is useState in ReactJS</h1>
      <div className="heading">
        {state[0].value} {state[1].data}
      </div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default UseState;
