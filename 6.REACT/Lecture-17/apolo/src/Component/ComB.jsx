import React from "react";
import ComB1 from "./ComB1";
import ComB2 from "./ComB2";

const ComB = () => {
  return (
    <div>
      <h1 className="heading">ComB</h1>
      <div className="flex space-x-6">
        <ComB1 />
        <ComB2/>
      </div>
    </div>
  );
};

export default ComB;