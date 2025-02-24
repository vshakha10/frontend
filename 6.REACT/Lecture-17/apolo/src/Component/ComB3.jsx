
import React from "react";
import { element } from "../App";
import { useContext } from "react";

const ComB3 = () => {
  const item = useContext(element);

  return (
    <div>
      <h1 className="heading">ComB3</h1>
      <span className="btn">{item}</span>
    </div>
  );
};

export default ComB3;
