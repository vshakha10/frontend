import React from "react";
import ComA1 from "./ComA1";
import ComA2 from "./ComA2";

const ComA = () => {
  return (
    <div>
      <h1 className="heading">ComA</h1>
      <div className="flex space-x-6">
        <ComA1 />
        <ComA2 />
      </div>
    </div>
  );
};

export default ComA;