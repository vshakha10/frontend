import React from "react";
import { useState, useEffect } from "react";

// useEffect(callbackfunction , dependencies)
// useEffect side effect create

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     console.log("Increment Count");
  //   } , [count]);

  //   useEffect(() => {
  //     console.log("Multi Count");
  //   } , [multi]);

  //   const handleMultiply = () => {
  //     setMulti(count * 10)
  //   }

  const handleData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    setData(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    handleData()
  } , [])

  return (
    <div>
      <h1 className="heading">This is UseEffect Components</h1>
      {/* <div className="btn">count:-{count}</div>
      <div className="btn">
        multiply:-{multi}
      </div>
      <button className="btn" onClick={handleMultiply}>Multiply</button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>This is span tag</span> */}
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>{item.id}</li>
              <li>{item.description}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UseEffect;