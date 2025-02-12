import React from "react";

function Demo({ handleClick, print }) {
  return (
    <div>
      <button className="btn py-2 px-6 bg-amber-700 text-white m-2 text-xl font-bold" onClick={handleClick}>
        click
      </button>
      <button className="btn py-2 px-6 bg-amber-700 text-white m-2 text-xl font-bold" onClick={() => console.log(10 + 10)}>
        Sum
      </button>
      <button className="btn py-2 px-6 bg-amber-700 text-white m-2 text-xl font-bold" onClick={print}>
        Print
      </button>
    </div>
  );
}

export default Demo;
