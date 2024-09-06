import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(16)
     
    const increment=()=>{
        setCount(count +5)
    }
    const decrement=()=>{
        setCount(count +1)
    }
  return (
    <div>
        <p>count:{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter
