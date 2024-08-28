import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    setCount((count) => count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="counter-component">
        <h1>Counter:</h1>

        <p className="count-text">Count: {count}</p>
        <div>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>Increment</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
