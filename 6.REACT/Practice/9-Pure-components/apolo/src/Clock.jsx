

import React from 'react'

function Clock({time}) {
  let hours = time.getHours();
  let className;
  if(hours >=0 && hours <= 6){
    className = "Night";
  }
  else{
    className = "day";
  }
  return (
    <div>
      <h1 classN></h1>
    </div>
  )
}

export default Clock


export function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
export default Clock;