import React, { useState } from 'react'

export const UseEffect = () => {
  const [count,setCount]= useState(0);
  const handleButton=()=>
  {
    setCount((count)=>count+1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleButton}>+</button>
    </div>
  )
}
