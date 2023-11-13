import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "increment":
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
  }
};

// Component
const Myreducer = () => {
  // Initial state and dispatch function from useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  // JSX rendering
  return (
    <div>
      <div>Count: {state.count}</div>
      {/* Render error message if it exists */}
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      {/* Buttons for increment and decrement actions */}
      <button className="btn" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
};

export default Myreducer;
