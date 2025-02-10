import React from "react";

const array = [
  "B",
  "Babbage",
  "Ballerina",
  "Bash",
  "BASIC",
  " Batch file (Windows/MS-DOS)",
  "  bc (basic calculator)",
  "BCPL",
];

const List = () => {
  let list = array.map((item , index) => {
    return <li key={index}>{item}</li>;
  });

  return list
};

const RenderingList = () => {
  return (
    <div>
      <h1 className="heading">This is Heading Tag</h1>
      <ul>
        <List />
      </ul>
    </div>
  );
};

export default RenderingList;