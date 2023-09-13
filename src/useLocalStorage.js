import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Use the `prev` value to increment the state
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    // Use the `prev` value to decrement the state
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
