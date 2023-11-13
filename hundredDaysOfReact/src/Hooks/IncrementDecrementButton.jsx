// Create a React component that includes a counter and a button to reset the counter to zero.

// Initialize the counter state using the useState hook.
// Display the current count on the page.
// Include a button that, when clicked, increments the counter.
// Add another button that, when clicked, resets the counter to zero.

import React from "react";
import { useState } from "react";

const Exercise = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="m-10">
      <p className="font-bold">
        Count:<span className="font-semibold">{count}</span>
      </p>
      <div className="flex gap-2 mt-10">
        <button onClick={handleIncrement} className="btn">
          Inc
        </button>
        <button onClick={handleDecrement} className="btn">
          Dec
        </button>
        <button onClick={handleReset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Exercise;
